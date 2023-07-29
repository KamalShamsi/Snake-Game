import React from 'react';
import PropTypes from 'prop-types';

const PauseResumeButton = ({onClick, isPaused}) => (
  <button onClick={onClick}>
    {isPaused ? 'Resume' : 'Pause'}
  </button>
);

PauseResumeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isPaused: PropTypes.bool.isRequired,
};

export default PauseResumeButton;
