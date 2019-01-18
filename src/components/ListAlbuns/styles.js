import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  margin-top: 3rem;
`;

export const List = styled.div`
  margin-top: 1.3rem;
  margin-bottom: 7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  &:after {
    flex: 1 1 100%;
    max-width: 50%;
    content: '';
  }
`;
export const Title = styled.h3`
  font-weight: 700;
  color: ${colors.lighten};
  font-size: 1.6rem;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.light};
  max-width: 12.5rem;
  margin: 0 2rem 2rem;

  &:hover  img {
      opacity: 0.8;
    }
  }

  img {
    width: 100%;
  }

  strong {
    font-size: 0.9rem;
    margin-top: 0.9rem;
  }

  p {
    margin-top: 0.4rem;
    font-size: 0.7rem;
    color: ${colors.light};
    line-height: 20px;
  }
`;
