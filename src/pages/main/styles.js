import styled from 'styled-components';
import { colors } from './../../styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: ${colors.black};
  color: ${colors.success};
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  .logo__title {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1.11px;
    font-weight: 700;
  }
`;
export const MainContent = styled.main`
  color: inherit;
`;
