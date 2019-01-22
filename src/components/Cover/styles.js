import styled from 'styled-components';
import { colors } from '../../styles/colors';
import ArtistIcon from '../../assets/images/artist_icon.svg';

export const Image = styled.div`
  width: 200px;
  height: 200px;
  min-width: 200px;
  min-height: 200px;
  max-width: 300px;
  max-height: 300px;
  background-color: ${colors.dark};
  background-image: ${({ images }) => (images.length ? `url(${images[0].url})` : `url(${ArtistIcon})`)};
  background-size: ${({ images }) => (images.length ? 'cover' : '50%')};
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
`;
