import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ArtistActions } from '../../store/ducks/artist';

import Cover from '../../components/Cover';
import { Container, Info, Title } from './styles';

import ListAlbuns from '../../components/ListAlbuns';

class Artist extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { token, artistRequest } = this.props;
    artistRequest(id, token);
  }

  render() {
    console.tron.log(this.props.artist);
    return (
      <Container className="page__padding">
        <Info>
          <Cover images={[]} />
          <div>
            <Title>Imagine Dragons</Title>
            <strong>Popularity 89</strong>
            <small>200 followers</small>
            <small>irish rock, rock</small>
          </div>
        </Info>
        {/* <ListAlbuns data={items} /> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token.accessToken,
  artist: state.artist,
});

const mapDispatchToProps = dispatch => bindActionCreators(ArtistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artist);
