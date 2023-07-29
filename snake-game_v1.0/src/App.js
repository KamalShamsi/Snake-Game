import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Score from './components/Score';
import StartModal from './components/StartModal';
import GameOverModal from './components/GameOverModal';
import './styles/App.css';

function App() {
  const [snakeDots, setSnakeDots] = useState([[0,0], [2,0]]);
  const [foodDot, setFoodDot] = useState([0, 0]);
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [speed, setSpeed] = useState(200);
  const [paused, setPaused] = useState(false); // states

  useEffect(() => {
    if (gameStarted && !gameOver && !paused) { //conditions
      const interval = setInterval(moveSnake, speed);
      return () => clearInterval(interval);
    }
  }, [snakeDots, gameStarted, gameOver, paused, speed]); // dependencies

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
      setScore(score + 1);
      increaseSpeed();
    } else {
      dots.shift();
    }

    if (checkCollision(head)) {
      onGameOver();
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

  const onGameOver = () => {
    setSnakeDots([[0, 0]]);
    setDirection('RIGHT');
    setGameOver(true);
    setSpeed(200);
  };

  const increaseSpeed = () => {
    if (speed > 100) {
      setSpeed(speed - 10);
    }
  };

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <Score score={score} />
      <GameBoard snakeDots={snakeDots} foodDot={foodDot} />
      {/* pause/resume button */}
      <button onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>
      <StartModal 
        isOpen={!gameStarted}
        onRequestClose={() => setGameStarted(true)}
      />
      <GameOverModal
        isOpen={gameOver}
        onRequestClose={() => {setGameOver(false); setGameStarted(false); setScore(0);}}
        score={score}
      />
    </div>
  );
}

export default App;
