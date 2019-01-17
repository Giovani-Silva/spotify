import styled from 'styled-components';
import { colors } from './../../styles/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: ${colors.black};
  color: ${colors.success};
  text-transform: uppercase;
  letter-spacing: 1.11px;
  font-weight: 700;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
`;
export const MainContent = styled.main`
  color: inherit;
`;
export const Footer = styled.footer`
  color: inherit;
`;
