import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.light};
  max-width: 13rem;

  &:hover  img {
      opacity: 0.8;
    }
  }

  img {
    height: 13rem;
  }

  strong {
    font-size: 0.9rem;
    margin-top: 0.9rem;
  }

  p {
    margin-top: 0.6rem;
    font-size: 0.9rem;
    color: ${colors.regular};
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
