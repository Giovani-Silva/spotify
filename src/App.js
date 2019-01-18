import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Main from './pages/main';

import GlobalStyle from './styles/global';
import {
  Container, Wrapper, Left, Content,
} from './styles/app';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Main />
      {/* <Wrapper>
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
      </Wrapper> */}
    </BrowserRouter>
  </Fragment>
);

export default App;
