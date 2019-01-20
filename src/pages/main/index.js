import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ls from 'local-storage';

import Routes from '../../routes';
import { Creators as TokenActions } from '../../store/ducks/token';

import spotify from '../../config/keys';

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

  redirectToSpotifyLogin = () => window.location.replace(
    `${spotify.URL_ACCOUNT_LOGIN}client_id=${spotify.CLIENT_ID}&redirect_uri=${
      spotify.REDIRECT_URI
    }&response_type=token&state=123`,
  );

  getAccessToken = () => {
    const token = ls.get('token') || null;
    
    if (token) this.props.saveToken(token);

    if (!token) {
      if (/localhost:3000\/$/.test(window.location.href)) {
        this.redirectToSpotifyLogin();
        return;
      }
      const url = window.location.href;
      const accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/);
      const hasTokenUrl = !!accessToken;
      if (!hasTokenUrl) {
        this.redirectToSpotifyLogin();
        return;
      }
      this.props.saveToken(accessToken[1]);
      ls.set('token', accessToken[1]);
      window.history.replaceState(null, null, window.location.pathname);
    }
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
