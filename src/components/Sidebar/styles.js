import styled from 'styled-components';
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

export const Nav = styled.ul`
  list-style: none;
  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  li {
    position: relative;

    &.active:before {
      content: '';
      width: 6px;
      height: 100%;
      background: ${colors.success};
      position: absolute;
      left: -1rem;
    }

    span {
      color: ${colors.regular};
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    a {
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

      &:hover {
        opacity: 1;
        color: ${colors.white};
      }

      img {
        width: 24px;
        height: 24px;
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Profile = styled.button`
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
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
