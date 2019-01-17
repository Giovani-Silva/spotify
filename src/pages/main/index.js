import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

import {
  Container, Wrapper, Content, MainContent,
} from './styles';

const Main = () => (
  <Wrapper>
    <Container>
      <Content>
        <Header />
        <Sidebar />
      </Content>
      <Content>
        <MainContent>Main</MainContent>
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default Main;
