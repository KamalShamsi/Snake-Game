import React from 'react';

function DifficultySelector({ onSelectDifficulty }) {
  return (
    <div className="difficulty-selector">
      <button onClick={() => onSelectDifficulty('easy')}>Easy</button>
      <button onClick={() => onSelectDifficulty('medium')}>Medium</button>
      <button onClick={() => onSelectDifficulty('hard')}>Hard</button>
    </div>
  );
}

export default DifficultySelector;
