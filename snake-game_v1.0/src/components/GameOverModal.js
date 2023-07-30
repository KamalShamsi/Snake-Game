import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function GameOverModal({ isOpen, onRequestClose, score }) {
  return (
    <Dialog open={isOpen} onClose={onRequestClose}>
      <DialogTitle>Game Over</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You finished the game with a score of {score}. 
          If you want to play again, press the "Restart" button.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onRequestClose}>
          Restart
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GameOverModal;
