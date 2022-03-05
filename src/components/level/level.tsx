import React from 'react';
import './level.scss'

interface LevelProps {
  readonly level?: number;
}

function Level({level = 0}: LevelProps) {
  const spanArr = new Array(4).fill(<i/>, 0, 4);
  return (
    <div className="level">
      {spanArr.map((item, index) => <span className={index < level ? "active" : ""} key={index}>{item}</span>)}
    </div>
  );
}

export default Level;