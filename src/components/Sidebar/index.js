import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as MeActions } from '../../store/ducks/me';

import SearchIcon from '../../assets/images/search.svg';
import HomeIcon from '../../assets/images/home.svg';
import LibraryIcon from '../../assets/images/library.svg';
import {
  Container, Profile, Nav, Link, Title,
} from './styles';

const Sidebar = ({ me }) => {
  const {
    data: { display_name, images },
  } = me;
  return (
    <Container>
      <Title>Menu principal</Title>
      <div>
        <Nav main>
          <li>
            <Link to="/search">
              <img src={SearchIcon} alt="search" />
              Buscar
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="home" />
              Início
            </Link>
          </li>
          <li>
            <Link to="/library">
              <img src={LibraryIcon} alt="library" />
              Sua Biblioteca
            </Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Tocadas recentemente</span>
          </li>
          <li>
            <Link to="/playlist/1">As melhores do rock</Link>
          </li>
          <li>
            <Link to="/playlist/2">Top Rock 2018</Link>
          </li>
        </Nav>
      </div>

      {display_name && (
        <Profile to="/me" exact>
          <img alt="avatar" src={images && images.length ? images[0].url : ''} />
          {display_name}
        </Profile>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  me: state.me,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
