import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ls from 'local-storage';

import Routes from '../../routes';
import { Creators as TokenActions } from '../../store/ducks/token';
import { Creators as MeActions } from '../../store/ducks/me';

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

  componentDidMount() {
    // this.props.meRequest(this.props.state.token)
  }

  redirectToSpotifyLogin = () => window.location.replace(
    `${spotify.URL_ACCOUNT_LOGIN}client_id=${spotify.CLIENT_ID}&scope=${
      spotify.SCOPE
    }&response_type=token&redirect_uri=${spotify.REDIRECT_URI}`,
  );

  getAccessToken = async () => {
    console.log('Iniciou getAccessToken');
    const { accessToken: token } = this.props.state.token;
    const { saveToken } = this.props;

    if (!token) {
      console.log('!Token');
      const url = window.location.href;
      const accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/);
      if (!accessToken) {
        console.log('!accessToken');
        this.redirectToSpotifyLogin();
      }
      console.log('saveToken(accessToken[1])');
      await saveToken(accessToken[1]);
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

const mapDispatchToProps = dispatch => bindActionCreators({ ...TokenActions, ...MeActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
