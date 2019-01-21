import React from 'react';

import {
  Container, List, Title, Playlist, Cover,
} from './styles';

const isVariousArtists = artists => artists.length > 1;
const resumeName = (name) => {
  if (name.length > 40) return `${name.slice(0, 40)}...`;

  return name;
};

const ListAlbuns = ({ albums }) => (
  <Container>
    <Title>Albuns</Title>
    <List>
      {albums.map(({
        id, artists, images, name, total_tracks: tracks,
      }) => (
        <Playlist key={id} to={`/albums/${id}`}>
          <Cover images={images} />
          <strong>{`${resumeName(name)}`}</strong>
          <p>{isVariousArtists(artists) ? 'Various Artists' : artists[0].name}</p>
          <p>{`${tracks} tracks`}</p>
        </Playlist>
      ))}
    </List>
  </Container>
);

export default ListAlbuns;
