import React from 'react';

import {
  Container, List, Title, Playlist, Cover, Tag,
} from './styles';

const checkPopularity = (popularity) => {
  if (popularity > 79) return 'Hot';
  if (popularity > 59) return 'Cool';
  if (popularity > 29) return 'Regular';
  return 'Underground';
};

const ListArtists = ({ artists }) => (
  <Container>
    <Title>Artists</Title>
    <List>
      {artists.map(({
        id, name, popularity, genres, images,
      }) => {
        const level = checkPopularity(popularity);
        return (
          <Playlist key={id} to={`/artists/${id}`}>
            <Cover images={images} />
            <strong>{name}</strong>
            <Tag level={level}>
              <div>{popularity}</div>
              {level}
            </Tag>
            <p>{genres.join(', ')}</p>
          </Playlist>
        );
      })}
    </List>
  </Container>
);

export default ListArtists;
