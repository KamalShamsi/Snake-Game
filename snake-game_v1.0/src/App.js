import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Score from './components/Score';
import StartModal from './components/StartModal';
import GameOverModal from './components/GameOverModal';
import DifficultySelector from './components/DifficultySelector';
import PauseResumeButton from './components/PauseResumeButton';
import './styles/App.css';

const DIFFICULTIES = {
  easy: 200,
  medium: 100,
  hard: 50,
};

function App() {
  const [snakeDots, setSnakeDots] = useState([[0,0], [2,0]]);
  const [foodDot, setFoodDot] = useState([0, 0]);
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [speed, setSpeed] = useState(DIFFICULTIES[difficulty]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (gameStarted && !gameOver && !isPaused) {
      const interval = setInterval(moveSnake, speed);
      return () => clearInterval(interval);
    }
  }, [snakeDots, gameStarted, gameOver, speed, isPaused]);

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
    setSpeed(DIFFICULTIES[difficulty]); // Reset speed
  };

  const increaseSpeed = () => {
    if (speed > DIFFICULTIES.hard) { // Ensure speed doesn't get too fast
      setSpeed(speed - 10);
    }
  };

  const onSelectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setSpeed(DIFFICULTIES[selectedDifficulty]);
  }

  const onGameOverModalClose = () => {
    setGameOver(false);
    setGameStarted(false);
    setScore(0);
    setSpeed(DIFFICULTIES[difficulty]);
  };

  const onPauseResume = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <Score score={score} />
      <DifficultySelector onSelectDifficulty={onSelectDifficulty} />
      <PauseResumeButton onPauseResume={onPauseResume} isPaused={isPaused} />
      <GameBoard snakeDots={snakeDots} foodDot={foodDot} />
      <StartModal isOpen={!gameStarted} onRequestClose={() => setGameStarted(true)} />
      <GameOverModal isOpen={gameOver} onRequestClose={onGameOverModalClose} score={score} />
    </div>
  );
}

export default App;
