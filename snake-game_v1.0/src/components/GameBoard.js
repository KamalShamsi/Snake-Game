import React from 'react';
import Snake from './Snake';
import Food from './Food';

const GameBoard = ({ snakeDots, foodDot }) => (
  <div className="game-board">
    <Snake snakeDots={snakeDots} />
    <Food dot={foodDot} />
  </div>
);

export default GameBoard;
