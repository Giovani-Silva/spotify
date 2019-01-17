import React, { Component } from 'react';

import { Container, BoxSearch } from './styles';
import SearchIcon from '../../assets/images/search.svg';

import ListAlbuns from '../../components/ListAlbuns';

class Search extends Component {
  state = {
    inputSearch: '',
  };

  render() {
    return (
      <Container className="page__padding">
        <BoxSearch>
          <input type="text" placeholder="Search..." />
          <img src={SearchIcon} alt="search" aria-hidden="true" />
        </BoxSearch>
        <h2>Resultado da Pesquisa</h2>
        <ListAlbuns />
      </Container>
    );
  }
}

export default Search;
