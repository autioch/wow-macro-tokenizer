import React from 'react';
import Token from './token';

export default ({ line: { line, tokens, grammar } }) => (
  <div className="line">
    <div className="line__original">{line}</div>
    <div className="line__grammar">{grammar}</div>
    <div className="line__results">
      {tokens.map((token, index) => (<Token key={index} token={token} />))}
    </div>
  </div>
);
