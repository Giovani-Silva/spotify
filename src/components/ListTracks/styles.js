import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { device } from '../../styles/metrics';

export const Container = styled.div`
  height: 100%;
  margin-top: 3rem;
`;

export const Title = styled.div`
  font-weight: 700;
  color: ${colors.light};
  font-size: 1.6rem;
`;
export const TracksTable = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const TracksHead = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  color: ${colors.lighten};
  @media${device.tablet}{
    display: flex;
  }
  div {
    text-align: left;
    flex: 1;
    padding: 0 5px;
    &:first-child {
      max-width: 50px;
    }
    &:last-child {
      text-align: right;
      max-width: 60px;
    }
  }
`;
export const TracksBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${colors.regular};
  flex-wrap: wrap;

  &:hover {
    background: ${colors.darken}
  }

  div {
    text-align: left;
    flex: 1;
    padding: 0 5px;

    &:first-child {
      max-width: 50px;
    }

    &:last-child {
      text-align: right;
      max-width: 60px;
    }
    }
    }


`;
