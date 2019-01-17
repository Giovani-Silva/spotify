import React from 'react';

import SearchIcon from '../../assets/images/search.svg';
import HomeIcon from '../../assets/images/home.svg';
import LibraryIcon from '../../assets/images/library.svg';
import { Container, Profile, Nav } from './styles';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">
            <img src={SearchIcon} alt="search" />
            Buscar
          </a>
        </li>
        <li className="active">
          <a href="">
            <img src={HomeIcon} alt="home" />
            Início
          </a>
        </li>
        <li>
          <a href="">
            <img src={LibraryIcon} alt="library" />
            Sua Biblioteca
          </a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Tocadas recentemente</span>
        </li>
        <li>
          <a href="">As melhores do rock</a>
        </li>
        <li>
          <a href="">Top Rock 2018</a>
        </li>
      </Nav>
    </div>
    <Profile>
      <img alt="avatar" src="https://avatars3.githubusercontent.com/u/6223139?v=4" />
      Giovani Silva
    </Profile>
  </Container>
);

export default Sidebar;
