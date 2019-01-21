import styled from 'styled-components';
import { Link as NavLink } from 'react-router-dom';

import { colors } from '../../styles/colors';

export const Container = styled.aside`
  color: coral;
  background: ${colors.black};
  color: ${colors.lighten};
  min-width: 13rem;
  max-width: 20rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 0.0001px;
  position: absolute;
  left: -100%;
`;

export const Nav = styled.ul`
  list-style: none;
  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  li {
    position: relative;

    span {
      color: ${colors.regular};
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${colors.lighten};
  text-decoration: none;
  color: inherit;
  font-size: 0.8rem;
  transition: all 0.75s ease-out;
  padding: 0.6rem;
  font-weight: ${props => (props.main ? 'bold' : 'normal')};
  opacity: 0.7;

  &:hover,
  &.active {
    opacity: 1;
    color: ${colors.white};
  }

  /* &.active:before {
    content: '';
    width: 6px;
    height: 100%;
    background: ${colors.success};
    position: absolute;
    left: -1rem;
  } */

  img {
    width: 24px;
    height: 24px;
    margin-right: 0.8rem;
  }
`;

export const Profile = styled(NavLink)`
  text-decoration: none;
  color: ${colors.light};
  border-top: 1px solid ${colors.darken};
  font-size: 0.8rem;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  transition: color 0.5s ease-out;

  &:hover {
    color: ${colors.white};
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
