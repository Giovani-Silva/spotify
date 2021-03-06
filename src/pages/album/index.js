import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as AlbumActions } from '../../store/ducks/album';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import {
  Container, Info, Cover, Title, SongList, OverFlow
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
      selected: { album },
    } = this.props;

    return (
      <Info>
        <Cover images={album.images} />
        <div>
          <small>Album</small>
          <Title>{album.name}</Title>
          <strong>{album.artists[0].name}</strong>
          <small>{`${album.total_tracks} tracks`}</small>
          <button type="button">PLAY</button>
        </div>
      </Info>
    );
  };

  renderTracks = () => {
    const {
      selected: { album, tracks },
    } = this.props;
    if (!tracks.length) return false;
    return tracks.map(({ track_number, name, artists, duration_ms }) => (
      <tr key={track_number}>
        <td>
          <img src={`/${PlusIcon}`} alt="Play" />
        </td>
        <td className="track">{name}</td>
        <td>{artists[0].name}</td>
        <td>{album.name}</td>
        <td>{this.msToTime(duration_ms)}</td>
      </tr>
    ));
  };

  msToTime = (duration) => {
    let sec = parseInt((duration / 1000) % 60, 10);
    const min = parseInt((duration / (1000 * 60)) % 60, 10);
    sec = sec < 10 ? `0${sec}` : sec;

    return `${min}:${sec}`
  };

  render() {
    return (
      <Container className="page__padding">
        {this.renderinfoAlbum()}
        <OverFlow>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th className="track">Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <img src={`/${ClockIcon}`} alt="Duration" />
            </th>
          </thead>
          <tbody>{this.renderTracks()}</tbody>
        </SongList>
        </OverFlow>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token.accessToken,
  selected: state.album,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumDetail);
