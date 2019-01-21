import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as ArtistActions } from '../../store/ducks/artist';
import {
  Container, Info, Title, Cover,
} from './styles';

import ListAlbuns from '../../components/ListAlbuns';

class Artist extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    artistRequest: PropTypes.func.isRequired,
  };

  async componentWillMount() {
    const {
      match: {
        params: { id },
      },
      token,
      artistRequest,
    } = this.props;
    await artistRequest(id, token);
  }

  renderInfo = () => {
    const {
      artist: {
        info: {
          images, name, popularity, followers, genres,
        },
        albums,
      },
    } = this.props;
    if (name) {
      return (
        <div>
          <Info>
            <Cover images={images} />
            <div>
              <Title>{name}</Title>
              <strong>{`Popularity ${popularity}`}</strong>
              <small>{`${followers.total} followers`}</small>
              <small>{genres.join(', ')}</small>
            </div>
          </Info>
          <ListAlbuns albums={albums} />
        </div>
      );
    }
  };

  render() {
    return <Container className="page__padding">{this.renderInfo()}</Container>;
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
