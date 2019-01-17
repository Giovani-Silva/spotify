import React from 'react';

import Sidebar from './../../components/Sidebar';

import Logo from './../../assets/favicon.png';

import { Container, Content, Header, MainContent, Footer } from './styles';

const Main = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={Logo} alt="Spotify" />
          Spotify
        </Header>
        <Sidebar />
      </Content>
      <Content>
        <MainContent>Main</MainContent>
        <Footer>Footer</Footer>
      </Content>
    </Container>
  );
};

export default Main;
