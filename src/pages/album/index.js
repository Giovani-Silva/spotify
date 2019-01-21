import React from 'react';

import { Container } from './styles';

import Filters from '../../components/Filters';
import ListAlbuns from '../../components/ListAlbuns';

const Albuns = () => (
  <Container className="page__padding">
    <Filters />
    <h2>Albuns</h2>
    <ListAlbuns />
  </Container>
);

export default Albuns;
