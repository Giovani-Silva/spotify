import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as AlbumActions } from '../../store/ducks/album';

import {
  Container, List, Title, Playlist, Cover,
} from './styles';

const isVariousArtists = artists => artists.length > 1;
const resumeName = (name) => {
  if (name.length > 40) return `${name.slice(0, 40)}...`;

  return name;
};

const ListAlbuns = ({ albums, albumSelected }) => (
  <Container>
    <Title>Albuns</Title>
    <List>
      {albums.map((album) => {
        const {
          id, artists, images, name, total_tracks: tracks,
        } = album;
        return (
          <Playlist key={id} to={`/albums/${id}`} onClick={() => albumSelected(album)}>
            <Cover images={images} />
            <strong>{`${resumeName(name)}`}</strong>
            <p>{isVariousArtists(artists) ? 'Various Artists' : artists[0].name}</p>
            <p>{`${tracks} tracks`}</p>
          </Playlist>
        );
      })}
    </List>
  </Container>
);

const mapDispatchToProps = dispatch => bindActionCreators(AlbumActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(ListAlbuns);
