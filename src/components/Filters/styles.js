import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.ul`
  list-style: none;
  height: 4rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Filter = styled.li`
  & > .active {
    color: ${colors.white};
    border-bottom: 2px solid;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  text-decoration: none;
  color: ${colors.light};
  font-weight: 700;
  padding: 1rem 0;
`;
