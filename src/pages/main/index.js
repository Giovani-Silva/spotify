import React from 'react';

import Sidebar from './../../components/Sidebar';
import Player from './../../components/Player';

import Logo from './../../assets/favicon.png';

import { Container, Wrapper, Content, Header, MainContent } from './styles';

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Header>
            <img src={Logo} alt="Spotify" />
            <h1 className="logo__title">Spotify</h1>
          </Header>
          <Sidebar />
        </Content>
        <Content>
          <MainContent>Main</MainContent>
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
};

export default Main;
