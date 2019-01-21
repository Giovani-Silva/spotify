import React from 'react';

import { Container } from './styles';

import ListAlbuns from '../../components/ListAlbuns';

const Start = () => (
  <Container className="page__padding">
    <h2>Navegar</h2>
    <ListAlbuns albums={[]}/>
  </Container>
);

export default Start;
