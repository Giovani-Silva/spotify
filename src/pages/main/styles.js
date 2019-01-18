import styled from 'styled-components';
import { colors } from '../../styles/colors';
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
  margin-left: 15rem;
  background: linear-gradient(to bottom, ${colors.success} 0%, ${colors.black} 100%), transparent;
  background-size: 100% 250px, 100%;
  background-repeat: no-repeat;
  background-position: top;
}
`;

export const Left = styled.div`
  height: calc(100% - 6rem);
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 15rem;
`;
