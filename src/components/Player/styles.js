import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 4.5rem;
  color: inherit;
  background: ${colors.black};
  padding: 0.8rem;

  display: flex;
  justify-content: space-between;
`;

export const Current = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
  }

  div {
    margin-left: 0.9rem;
    display: flex;
    flex-direction: column;
    line-height: 16px;

    span {
      font-size: 0.7rem;
      color: ${colors.light};
    }

    small {
      font-size: 0.6rem;
      color: ${colors.lighten};
      margin-top: 5px;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const Control = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 1rem;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  span {
    font-size: 0.7rem;
    color: ${colors.regular};
  }
`;

export const ProgressSlider = styled.div`
  width: 31.25rem;
  margin: 0 1rem;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;
