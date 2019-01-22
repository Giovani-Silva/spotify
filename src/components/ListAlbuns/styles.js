import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../styles/colors';

import ArtistIcon from '../../assets/images/artist_icon.svg';
import Play from '../../assets/images/play.svg';

export const Container = styled.div`
  height: 100%;
  margin-top: 3rem;
`;

export const List = styled.div`
  margin-top: 1.3rem;
  margin-bottom: 7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.light};
  max-width: 12.5rem;
  margin: 0 1rem 2rem;

  &:hover  div {
      opacity: 0.8;
      position: relative;
      &:before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url(/${Play});
        background-color: rgba(0,0,0, .6);
        background-size: contain;
        background-size: 25%;
        background-repeat: no-repeat;
        background-position: center;
      }
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
  min-width: 200px;
  min-height: 200px;
  max-width: 300px;
  max-height: 300px;
  background-color: ${colors.dark};
  background-image: ${({ images }) => (images.length ? `url(${images[0].url})` : `url(${ArtistIcon})`)};
  background-size: ${({ images }) => (images.length ? 'cover' : '50%')};
  background-position: center;
  background-repeat: no-repeat;
`;
