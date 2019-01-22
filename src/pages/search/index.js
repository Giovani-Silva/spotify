import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as SearchActions } from '../../store/ducks/search';

import Filters from '../../components/Filters';
import ListAlbuns from '../../components/ListAlbuns';
import ListArtists from '../../components/ListArtists';
import ListTracks from '../../components/ListTracks';

import { Container, BoxSearch } from './styles';
import SearchIcon from '../../assets/images/search.svg';

class Search extends Component {
  state = {
    types: {
      artist: 'artists',
      album: 'albums',
      track: 'tracks',
    },
    selectedType: 'artist',
    inputSearch: '',
    typingTimeout: 0,
  };

  setTypeSearch = (selectedType) => {
    this.setState({ selectedType, inputSearch: '' });
  };

  search = (text) => {
    if (!text) return;

    const { typingTimeout, types, selectedType } = this.state;
    const {
      searchRequest,
      token: { accessToken },
    } = this.props;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    this.setState({
      inputSearch: text,
      typingTimeout: setTimeout(() => {
        searchRequest(selectedType, types, text, accessToken);
      }, 2000),
    });
  };

  render() {
    const { data, type } = this.props.search;
    const { selectedType, inputSearch } = this.state;
    return (
      <Container className="page__padding">
        <Filters setType={this.setTypeSearch} active={selectedType} />
        <BoxSearch>
          <input
            type="text"
            placeholder="Digite para pesquisar..."
            value={inputSearch}
            onChange={e => this.search(e.target.value)}
            autoFocus
          />
          <img src={SearchIcon} alt="search" aria-hidden="true" />
        </BoxSearch>

        {!!data.length && type === 'artists' && <ListArtists artists={data} />}

        {!!data.length && type === 'albums' && <ListAlbuns albums={data} />}

        {!!data.length && type === 'tracks' && <ListTracks tracks={data} />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
