import React from 'react';

import {
  Container, List, Title, Playlist,
} from './styles';
import Cover from '../../assets/album-cover.png';

const ListAlbuns = () => (
  <Container>
    <Title>Albuns</Title>
    <List>
      <Playlist href="">
        <img src={Cover} alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock</p>
      </Playlist>
      <Playlist href="">
        <img src={Cover} alt="Playlist" />
        <strong>Rock Metal</strong>
        <p>Relaxe com as clássicas</p>
      </Playlist>
      <Playlist href="">
        <img src={Cover} alt="Playlist" />
        <strong>Surf Rock</strong>
        <p>Relaxe nas ondas das guitarras</p>
      </Playlist>
      <Playlist href="">
        <img src={Cover} alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock</p>
      </Playlist>
      <Playlist href="">
        <img src={Cover} alt="Playlist" />
        <strong>Rock Metal</strong>
        <p>Relaxe com as clássicas</p>
      </Playlist>
      <Playlist href="">
        <img src={Cover} alt="Playlist" />
        <strong>Surf Rock</strong>
        <p>Relaxe nas ondas das guitarras</p>
      </Playlist>
    </List>
  </Container>
);

export default ListAlbuns;
