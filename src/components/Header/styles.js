import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { device } from '../../styles/metrics';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  padding: 20px;
  justify-content: flex-end;
  color: ${colors.success};
  @media ${device.tablet} {
    justify-content: center;
  }

  @media ${device.tablet} {
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px;
  }

  .logo__title {
    font-size: 0;
    @media ${device.tablet} {
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 1.11px;
      font-weight: 700;
    }
  }
`;
