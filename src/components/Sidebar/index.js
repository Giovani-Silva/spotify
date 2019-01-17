import React from 'react';

import SearchIcon from '../../assets/images/search.svg';
import HomeIcon from '../../assets/images/home.svg';
import LibraryIcon from '../../assets/images/library.svg';
import {
  Container, Profile, Nav, Link, Title,
} from './styles';

const Sidebar = () => (
  <Container>
    <Title>Menu principal</Title>
    <div>
      <Nav main>
        <li>
          <Link to="/search" activeClassName="active" exact>
            <img src={SearchIcon} alt="search" />
            Buscar
          </Link>
        </li>
        <li>
          <Link to="/" activeClassName="active" exact>
            <img src={HomeIcon} alt="home" />
            Início
          </Link>
        </li>
        <li>
          <Link to="/library" activeClassName="active" exact>
            <img src={LibraryIcon} alt="library" />
            Sua Biblioteca
          </Link>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Tocadas recentemente</span>
        </li>
        <li>
          <Link to="/playlist/1" exact>
            As melhores do rock
          </Link>
        </li>
        <li>
          <Link to="/playlist/2" exact>
            Top Rock 2018
          </Link>
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
