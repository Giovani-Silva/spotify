import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Routes from '../../routes';
import { Creators as TokenActions } from '../../store/ducks/token';

// Components
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

import {
  Container, Wrapper, Left, Content,
} from './styles';

class Main extends Component {
  componentWillMount() {
    this.getAccessToken();
  }

  componentDidMount() {}

  getAccessToken = () => {
    if (/localhost:3000\/$/.test(window.location.href)) {
      window.location.replace(
        'https://accounts.spotify.com/authorize?client_id=6370e456654740c8bf8d82444a8b950b&redirect_uri=http:%2F%2Flocalhost%3A%33%30%30%30&response_type=token&state=123',
      );
    }
    const url = window.location.href;
    const accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/)[1];
    console.log(this.props);
    this.props.saveToken(accessToken);
  };

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

const mapDispatchToProps = dispatch => bindActionCreators(TokenActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
