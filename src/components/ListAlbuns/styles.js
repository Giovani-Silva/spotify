import styled from 'styled-components';
import { colors } from '../../styles/colors';

import ArtistIcon from '../../assets/images/artist_icon.svg';

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
  color: ${colors.light};
  font-size: 1.6rem;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.light};
  max-width: 12.5rem;
  margin: 0 2rem 2rem;

  &:hover  div {
      opacity: 0.8;
    }
  }

  img {
    width: 100%;
  }

  strong {
    font-size: 0.9rem;
    margin-top: 0.9rem;
    height: 4rem;
  }

  p {
    margin-top: 0.4rem;
    font-size: 0.7rem;
    color: ${colors.light};
    line-height: 20px;
  }
`;

export const Cover = styled.div`
  width: 200px;
  height: 200px;
  max-width: 300px;
  max-height: 300px;
  background-color: ${colors.dark};
  background-image: ${({ images }) => (images.length ? `url(${images[0].url})` : `url(${ArtistIcon})`)};
  background-size: ${({ images }) => (images.length ? 'cover' : '50%')};
  background-position: center;
  background-repeat: no-repeat;
`;
