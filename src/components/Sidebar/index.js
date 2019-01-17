import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from './../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Sua Biblioteca</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocadas recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="">Melhores do rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img alt="nova playlist" src={AddPlaylistIcon} />
      Nova playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
