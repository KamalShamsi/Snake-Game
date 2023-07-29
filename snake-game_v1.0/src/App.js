import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  const [snakeDots, setSnakeDots] = useState([[0,0], [2,0]]);
  const [foodDot, setFoodDot] = useState([0, 0]);
  const [direction, setDirection] = useState('RIGHT');

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [snakeDots]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setDirection('UP');
        break;
      case 40:
        setDirection('DOWN');
        break;
      case 37:
        setDirection('LEFT');
        break;
      case 39:
        setDirection('RIGHT');
        break;
    }
  };

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }

    dots.push(head);
    if (head[0] === foodDot[0] && head[1] === foodDot[1]) {
      generateFood();
    } else {
      dots.shift();
    }

    if (checkCollision(head)) {
      gameOver();
    } else {
      setSnakeDots(dots);
    }
  };

  const generateFood = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    setFoodDot([x, y]);
  };

  const checkCollision = (head) => {
    for (let i = 0; i < snakeDots.length; i++) {
      if (head[0] === snakeDots[i][0] && head[1] === snakeDots[i][1]) {
        return true;
      }
    }
    return head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0;
  };

  const gameOver = () => {
    setSnakeDots([[0, 0]]);
    setDirection('RIGHT');
  };

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <GameBoard snakeDots={snakeDots} foodDot={foodDot} />
    </div>
  );
}

export default App;
