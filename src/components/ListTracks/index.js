import React from 'react';
import PropTypes from 'prop-types';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import {
  Container, Title, TracksTable, TracksHead, TracksBody,
} from './styles';

const msToTime = (duration) => {
  let sec = parseInt((duration / 1000) % 60, 10);
  const min = parseInt((duration / (1000 * 60)) % 60, 10);
  sec = sec < 10 ? `0${sec}` : sec;

  return `${min}:${sec}`;
};

const renderTrack = tracks => tracks.map((track) => {
  const {
    id,
    duration_ms,
    name: nameTrack,
    album: { name, artists },
  } = track;
  return (
    <TracksBody>
      <div>
        <img src={`/${PlusIcon}`} alt="Add" />
      </div>
      <div className="track">{nameTrack}</div>
      <div>{artists[0].name}</div>
      <div>{name}</div>
      <div>{msToTime(duration_ms)}</div>
    </TracksBody>
  );
});

const ListTracks = ({ tracks }) => (
  <Container>
    <Title>Tracks</Title>
    <TracksTable>
      <TracksHead>
        <div />
        <div className="track">Track</div>
        <div>Artist</div>
        <div>Album</div>
        <div>
          <img src={`/${ClockIcon}`} alt="Duration" />
        </div>
      </TracksHead>
      {renderTrack(tracks)}
    </TracksTable>
  </Container>
);

export default ListTracks;
