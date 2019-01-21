import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as AlbumActions } from '../../store/ducks/album';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import {
  Container, Info, Cover, Title, SongList,
} from './styles';

class AlbumDetail extends Component {
  async componentWillMount() {
    const {
      match: {
        params: { id },
      },
      token,
      albumRequest,
    } = this.props;
    await albumRequest(id, token);
  }

  renderinfoAlbum = () => {
    const {
      album: { tracks },
    } = this.props;

    return (
      <Info>
        <Cover images={[]} />
        <div>
          <small>Album</small>
          <Title>Album</Title>
          <strong>Artist</strong>
          <small> 10 tracks</small>
          <button type="button">PLAY</button>
        </div>
      </Info>
    );
  };

  renderTracks = () => {};

  render() {
    return (
      <Container className="page__padding">
        {this.renderinfoAlbum()}
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <img src={`/${ClockIcon}`} alt="Duration" />
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={`/${PlusIcon}`} alt="Play" />
              </td>
              <td>Believe</td>
              <td>Imagine Dragons</td>
              <td>Origins</td>
              <td>3:02</td>
            </tr>
          </tbody>
        </SongList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token.accessToken,
  album: state.album,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumDetail);
