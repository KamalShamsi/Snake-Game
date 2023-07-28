import React, { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';

const App = () => {
  const [snakeDots, setSnakeDots] = useState([{ top: 0, left: 0 }]);
  const [foodDot, setFoodDot] = useState({ top: 50, left: 50 });
  const [direction, setDirection] = useState({ changeX: 0, changeY: 1 });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    moveSnake();
    checkIfOutOfBorders();
    checkIfCollapsed();
    checkIfEat();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [snakeDots]);

  const handleKeyDown = (e) => {
    //keydown logic here
  }

  const moveSnake = () => {
    //move logic here
  }

  const checkIfOutOfBorders = () => {
    //border checking logic here
  }

  const checkIfCollapsed = () => {
    //collision checking logic here
  }

  const checkIfEat = () => {
    //eating logic here
  }

  return (
    <div className="App">
      <GameBoard snakeDots={snakeDots} foodDot={foodDot} />
    </div>
  );
}

export default App;
