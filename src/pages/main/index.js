import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from '../../routes';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

import {
  Container, Wrapper, Left, Content,
} from './styles';

class Main extends Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
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
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(Main);
