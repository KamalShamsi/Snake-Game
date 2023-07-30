import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function StartModal({ isOpen, onRequestClose }) {
  return (
    <Dialog open={isOpen} onClose={onRequestClose}>
      <DialogTitle>Welcome to the Snake Game</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Use your arrow keys to move the snake. Eat food, grow in length, and try to avoid colliding with the border and yourself. 
          When ready, click on the "Start Game" button. Enjoy!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onRequestClose}>
          Start Game
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StartModal;
