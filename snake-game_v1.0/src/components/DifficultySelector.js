import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  easy: {
    backgroundColor: '#4caf50',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
  medium: {
    backgroundColor: '#ff9800',
    '&:hover': {
      backgroundColor: '#e68a00',
    },
  },
  hard: {
    backgroundColor: '#f44336',
    '&:hover': {
      backgroundColor: '#e53935',
    },
  },
}));

function DifficultySelector({ onSelectDifficulty }) {
  const classes = useStyles();

  return (
    <div className="difficulty-selector">
      <Button 
        variant="contained"
        className={`${classes.button} ${classes.easy}`} 
        onClick={() => onSelectDifficulty('easy')}>
        Easy
      </Button>
      <Button 
        variant="contained" 
        className={`${classes.button} ${classes.medium}`} 
        onClick={() => onSelectDifficulty('medium')}>
        Medium
      </Button>
      <Button 
        variant="contained" 
        className={`${classes.button} ${classes.hard}`} 
        onClick={() => onSelectDifficulty('hard')}>
        Hard
      </Button>
    </div>
  );
}

export default DifficultySelector;
