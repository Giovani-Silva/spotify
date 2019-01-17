import React from 'react';
import Slider from 'rc-slider';

import {
  Container,
  Current,
  Volume,
  Progress,
  Time,
  ProgressSlider,
  Controls,
  Control,
} from './styles';

import Cover from '../../assets/album-cover.png';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img src={Cover} alt="Cover" />
      <div>
        <span>Sky is a neighborhood</span>
        <small>Foo Fighters</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <Control>
          <button type="button">
            <img src={ShuffleIcon} alt="shuffle" />
          </button>
        </Control>
        <Control>
          <button type="button">
            <img src={BackwardIcon} alt="prev" />
          </button>
        </Control>
        <Control>
          <button type="button">
            <img src={PlayIcon} alt="play" />
          </button>
        </Control>
        {/* <Control>
          <button type="button">
            <img src={PauseIcon} alt="next" />
          </button>
        </Control> */}
        <Control>
          <button type="button">
            <img src={ForwardIcon} alt="next" />
          </button>
        </Control>
        <Control>
          <button type="button">
            <img src={RepeatIcon} alt="repeat" />
          </button>
        </Control>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:05</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#ededed' }}
        handleStyle={{ display: 'none' }}
        value={80}
      />
    </Volume>
  </Container>
);

export default Player;
