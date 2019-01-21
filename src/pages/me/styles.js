import styled from 'styled-components';
import { colors } from '../../styles/colors';
import noAvatar from '../../assets/images/no_avatar.svg';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 280px;
`;

export const Cover = styled.div`
  width: 200px;
  height: 200px;
  max-width: 300px;
  max-height: 300px;
  background-color: ${colors.dark};
  background-image: ${({ images }) => (images && images.length ? `url(${images[0].url})` : `url(${noAvatar})`)};
  background-size: ${({ images }) => (images && images.length ? 'cover' : '50%')};
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
`;
