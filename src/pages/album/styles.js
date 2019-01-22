import styled from 'styled-components';
import { colors } from '../../styles/colors';
import ArtistIcon from '../../assets/images/artist_icon.svg';

export const Container = styled.div`
  margin: 2rem;
`;
export const Info = styled.div`
  display: flex;
  margin: 2rem 0 6rem;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    justify-content: center;
    button {
      background: ${colors.success};
      width: 6rem;
      height: 2rem;
      border-radius: 1rem;
      color: ${colors.light};
      line-height: 2rem;
      padding: 0 2rem;
      border: 0;
      margin-top: 1rem;
      font-size: 0.8rem;
      letter-spacing: 1.11px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Cover = styled.div`
  width: 250px;
  height: 250px;
  min-width: 200px;
  min-height: 200px;
  max-width: 300px;
  max-height: 300px;
  background-color: ${colors.dark};
  background-image: ${({ images }) => (images.length ? `url(${images[0].url})` : `url(/${ArtistIcon})`)};
  background-size: ${({ images }) => (images.length ? 'cover' : '50%')};
  background-position: center;
  background-repeat: no-repeat;
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 4rem;

  thead th {
    font-size: 0.8rem;
    color: ${colors.lighten};
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 0.4rem 0.9rem;

    &:last-child {
      text-align: right;
    }
  }

  tbody {
    tr {
      &:hover td {
        background: ${colors.darken};
      }
      td {
        border-top: 1px solid ${colors.regular};
        font-size: 0.9rem;
        padding: 0 0.8rem;
        line-height: 2.3rem;
        background: transparent;
        transition: background ease-out 0.3s;

        &:first-child {
          width: 80px;
          text-align: right;
        }

        &:last-child {
          text-align: right;
        }
      }
    }
  }
`;
