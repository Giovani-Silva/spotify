import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
  static propTypes = {
    state: PropTypes.shape({
      token: PropTypes.shape({
        accessToken: PropTypes.string,
      }),
    }).isRequired,
    saveToken: PropTypes.func.isRequired,
    meInfoRequest: PropTypes.func.isRequired,
  };

  async componentWillMount() {
    await this.getAccessToken();
  }

  redirectToSpotifyLogin = () => window.location.replace(
    `${spotify.URL_ACCOUNT_LOGIN}client_id=${spotify.CLIENT_ID}&scope=${
      spotify.SCOPE
    }&response_type=token&redirect_uri=${spotify.REDIRECT_URI}`,
  );

  getAccessToken = async () => {
    const { accessToken: token } = this.props.state.token;
    const { saveToken, meInfoRequest } = this.props;

    if (!token) {
      const url = window.location.href;
      const accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/);

      if (!accessToken) this.redirectToSpotifyLogin();

      await saveToken(accessToken[1]);
      window.history.replaceState(null, null, window.location.pathname);

      meInfoRequest(this.props.state.token.accessToken);
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
