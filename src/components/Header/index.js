import React from 'react';
import Logo from '../../assets/favicon.png';

import { Container } from './styles';

const Header = () => (
  <Container>
    <img src={Logo} alt="Spotify" />
    <h1 className="logo__title">Spotify</h1>
  </Container>
);

export default Header;
