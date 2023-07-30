import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  pause: {
    backgroundColor: '#FF5722', 
    '&:hover': {
      backgroundColor: '#8B0000',
    },
  },
  resume: {
    backgroundColor: '#3F51B5', 
    '&:hover': {
      backgroundColor: '#673AB7',
    },
  },
}));

function PauseResumeButton({ onPauseResume, isPaused }) {
  const classes = useStyles();

  return (
    <Button 
      variant="contained"
      className={`${classes.button} ${isPaused ? classes.resume : classes.pause}`} 
      onClick={onPauseResume}>
      {isPaused ? 'Resume' : 'Pause'}
    </Button>
  );
}

export default PauseResumeButton;
