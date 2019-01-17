import styled from 'styled-components';
import { colors } from './../../styles/colors';

export const Container = styled.aside`
  color: coral;
  background: ${colors.black};
  color: ${colors.lighten};
  width: 13rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 1rem;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  li {
    span {
      color: ${colors.regular};
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
    a {
      color: inherit;
      text-decoration: none;
      color: inherit;
      font-size: 0.8rem;
      transition: color 0.75s ease-out;
      padding: 0.7rem;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: ${colors.success};
      }
    }
  }
`;

export const NewPlaylist = styled.button`
  color: ${colors.regular};
  background: transparent;
  border: 0;
  border-top: 1px solid ${colors.darken};
  font-size: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;

  cursor: pointer;
  transition: color 0.5s ease-out;

  &:hover {
    color: ${colors.white};
  }

  img {
    margin-right: 10px;
  }
`;
