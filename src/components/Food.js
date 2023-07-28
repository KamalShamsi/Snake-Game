import React from 'react';

const Food = ({ dot }) => {
  const style = {
    left: `${dot.left}%`,
    top: `${dot.top}%`
  }

  return (
    <div className="snake-food" style={style}></div>
  );
}

export default Food;
