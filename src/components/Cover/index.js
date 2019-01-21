import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './styles';

const Cover = images => <Image images={images} />;

Cover.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default Cover;
