import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

function GameOverModal({isOpen, onRequestClose, score}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Game Over Modal"
    >
      <h2>Game Over</h2>
      <p>Your score was: {score}</p>
      <button onClick={onRequestClose}>Play Again</button>
    </Modal>
  );
}

export default GameOverModal;
