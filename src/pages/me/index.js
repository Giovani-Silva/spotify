import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MeActions } from '../../store/ducks/me';

import { Container, Header, Cover } from './styles';

const Me = ({ me }) => {
  const {
    email, display_name, images, followers,
  } = me;

  return (
    <Container className="page__padding">
      <Header>
        <Cover images={images} />
        <h2>{display_name}</h2>
        <strong>{email}</strong>
        <strong>{`${followers.total || 0} followers`}</strong>
      </Header>
    </Container>
  );
};

const mapStateToProps = state => ({
  me: state.me.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Me);
