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

function StartModal({isOpen, onRequestClose}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Start Modal"
    >
      <h2>Hello</h2>
      <p>Welcome to the Snake Game! Use your arrow keys to move the snake. Don't run into the wall or your own tail! Eat the red food to grow bigger. Enjoy!</p>
      <button onClick={onRequestClose}>Start Game</button>
    </Modal>
  );
}

export default StartModal;
