import React from 'react';
import Snake from './Snake';
import Food from './Food';

const GameBoard = () => {
  return (
    <div className="game-board">
      <h2>Game Board</h2>
      <Snake />
      <Food />
    </div>
  );
};

export default GameBoard;
