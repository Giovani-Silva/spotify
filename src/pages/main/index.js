import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

import {
  Container, Wrapper, Left, Content,
} from './styles';

const Main = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Left>
          <Header />
          <Sidebar />
        </Left>
        <Content>
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default Main;
