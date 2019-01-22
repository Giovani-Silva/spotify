import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { device } from '../../styles/metrics';

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
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  background: linear-gradient(to bottom, ${colors.success} 0%, ${colors.black} 100%), transparent;
  background-size: 100% 250px, 100%;
  background-repeat: no-repeat;
  background-position: top;
  @media ${device.tablet} {
    margin-left: 15rem;
  }
`;

export const Left = styled.div`
  height: calc(100% - 6rem);
  display: flex;
  flex-direction: column;
  position: fixed;
  background: ${colors.black};
  width: 4rem;
  overflow: hidden;
  transition: all ease-out 0.2s;

  @media ${device.tablet} {
    width: 15rem;
  }
`;
