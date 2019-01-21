import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as MeActions } from '../../store/ducks/me';

import SearchIcon from '../../assets/images/search.svg';
import HomeIcon from '../../assets/images/home.svg';
import LibraryIcon from '../../assets/images/library.svg';
import {
  Container, Profile, Nav, Link, Title,
} from './styles';

class Sidebar extends Component {
  componentDidMount() {
    // this.props.meRequest(this.props.state.accessToken);
  }

  render() {
    // const { display_name, images } = this.props.me.data;
    return (
      <Container>
        <Title>Menu principal</Title>
        <div>
          <Nav main>
            <li>
              <Link to="/search" activeClassName="active" exact>
                <img src={SearchIcon} alt="search" />
                Buscar
              </Link>
            </li>
            <li>
              <Link to="/" activeClassName="active" exact>
                <img src={HomeIcon} alt="home" />
                Início
              </Link>
            </li>
            <li>
              <Link to="/library" activeClassName="active" exact>
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
              <Link to="/playlist/1" exact>
                As melhores do rock
              </Link>
            </li>
            <li>
              <Link to="/playlist/2" exact>
                Top Rock 2018
              </Link>
            </li>
          </Nav>
        </div>
       
          {/* <Profile to="/me" exact>
            <img alt="avatar" src={images && images.length ? images[0].url : ''} />
            {display_name}
          </Profile> */}
        
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state,
  me: state.me,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
