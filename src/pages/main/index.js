import React from 'react';

import {
  Container,
  Content,
  Sidebar,
  Header,
  MainContent,
  Footer
} from './styles';
const Main = () => {
  return (
    <Container>
      <Content>
        <Header>Header</Header>
        <Sidebar>Menu</Sidebar>
      </Content>
      <Content>
        <MainContent>Main</MainContent>
        <Footer>Footer</Footer>
      </Content>
    </Container>
  );
};

export default Main;
