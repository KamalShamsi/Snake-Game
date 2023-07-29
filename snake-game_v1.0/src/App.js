import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  const [snakeDots, setSnakeDots] = useState([[0,0], [2,0]]);
  const [foodDot, setFoodDot] = useState([0, 0]);

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <GameBoard snakeDots={snakeDots} foodDot={foodDot} />
    </div>
  );
}

export default App;
