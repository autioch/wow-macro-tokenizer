import React from 'react';

export default ({ line: { line, message } }) => (
  <div className="line">
    <div className="line__original">{line}</div>
    {message}
  </div>
);
