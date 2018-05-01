import React from 'react';

export default ({ line: { line, message, grammar } }) => (
  <div className="line">
    <div className="line__original">{line}</div>
    <div className="line__grammar">{grammar}</div>
    {message}
  </div>
);
