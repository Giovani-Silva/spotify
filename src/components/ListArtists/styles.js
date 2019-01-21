import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const Playlist = styled(Link)`
  display: flex;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.light};
  max-width: 12.5rem;
  margin: 0 2rem 2rem;

  &:hover  div:first-child {
      opacity: 0.6;
    }
  }

  strong {
    font-size: 1.2rem;
    margin-top: 0.9rem;
    letter-spacing: 1.11px;
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
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
`;

const levelColor = {
  Hot: colors.danger,
  Cool: colors.info,
  Regular: colors.lighten,
  Underground: colors.regular,
};

export const Tag = styled.small`
  color: ${({ level }) => levelColor[level]};
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border: ${({ level }) => `3px solid ${levelColor[level]}`};
    width: 2.3rem;
    height: 2.3rem;
    color: ${({ level }) => levelColor[level]};
    padding: 5px;
    border-radius: 50%;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
