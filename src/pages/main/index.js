import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

import { Container, Wrapper, Content } from './styles';

const Main = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Wrapper>
          <Header />
          <Sidebar />
        </Wrapper>
        <Content>
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default Main;
