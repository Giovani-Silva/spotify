import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { device } from '../../styles/metrics';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  color: inherit;
  background: ${colors.black};
  padding: 0.8rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: height ease-out 0.2s;

  @media ${device.tablet} {
    height: 6rem;
  }
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
  align-items: center;
  &:not(:nth-child(3)) {
    display: none;
  }
  @media ${device.tablet} {
    display: flex !important;
  }

  button {
    background: transparent;
    border: 0;
    margin: 0 1rem;
  }
`;

export const Time = styled.div`
  align-items: center;
  margin-top: 10px;
  display: none;
  @media ${device.tablet} {
    display: flex;
    max-width: 75%;
  }

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
  align-items: center;
  width: 100px;
  margin-right: 20px;
  display: none;
  @media ${device.tablet} {
    display: flex;
  }

  img {
    margin-right: 5px;
  }
`;
