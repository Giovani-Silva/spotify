import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const BoxSearch = styled.div`
  background: ${colors.blackTransparent};
  display: flex;
  flex: 1;
  justify-content: space-around;
  min-height: 80px;
  padding: 20px 50px;
  position: relative;
  margin: -20px -20px 40px;

  img {
    height: 48px;
    width: 48px;
    position: absolute;
    left: 64px;
    top: 32px;
    opacity: 0.4;
    transition: opacity 0.2s ease-out;
  }

  input[type='text'] {
    background: transparent;
    border: 0;
    border-bottom: 3px solid ${colors.lighten};
    width: calc(100% - 30px);
    margin: 15px;
    height: 64px;
    padding-left: 84px;
    padding-bottom: 14px;
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.white};

    &:focus {
      border-color: ${colors.white};
    }

    &:focus ~ img {
      opacity: 1;
    }

    &::placeholder {
      color: ${colors.lighten};
    }
  }
`;
