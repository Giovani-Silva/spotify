import styled from 'styled-components';
import { colors } from '../../styles/colors';
import ArtistIcon from '../../assets/images/artist_icon.svg';

export const Container = styled.div`
  margin: 2rem;
`;
export const Info = styled.div`
  display: flex;
  margin: 2rem;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    justify-content: space-around;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
`;
export const Cover = styled.div`
  width: 200px;
  height: 200px;
  max-width: 300px;
  max-height: 300px;
  background-color: ${colors.dark};
  background-image: ${({ images }) => (images.length ? `url(${images[0].url})` : `url(/${ArtistIcon})`)};
  background-size: ${({ images }) => (images.length ? 'cover' : '50%')};
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
`;
