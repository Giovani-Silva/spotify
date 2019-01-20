import React from 'react';

import { Container, Filter, Button } from './styles';

const Filters = ({ setType, active }) => (
  <Container>
    <Filter>
      <Button className={active === 'artist' ? 'active' : null} onClick={() => setType('artist')}>
        Artist
      </Button>
    </Filter>
    <Filter>
      <Button className={active === 'album' ? 'active' : null} onClick={() => setType('album')}>
        Album
      </Button>
    </Filter>
    <Filter>
      <Button className={active === 'track' ? 'active' : null} onClick={() => setType('track')}>
        Track
      </Button>
    </Filter>
  </Container>
);

export default Filters;
