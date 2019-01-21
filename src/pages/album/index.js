import React from 'react';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import {
  Container, Info, Cover, Title, SongList,
} from './styles';

const AlbumDetail = () => (
  <Container className="page__padding">
    <Info>
      <Cover images={[]} />
      <div>
        <small>Album</small>
        <Title>Origins (Deluxe)</Title>
        <strong>Imagine Dragons</strong>
        <small>13 faixas</small>
        <button>PLAY</button>
      </div>
    </Info>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Track</th>
        <th>Artist</th>
        <th>Album</th>
        <th>
          <img src={`/${ClockIcon}`} alt="Duration" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={`/${PlusIcon}`} alt="Play" />
          </td>
          <td>Believe</td>
          <td>Imagine Dragons</td>
          <td>Origins</td>
          <td>3:02</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default AlbumDetail;
