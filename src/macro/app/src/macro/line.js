import React from 'react';
import Token from './token';

export default ({ line }) => (
  <div className="line">
    {line.map((token, index) => <Token key={index} token={token} />)}
  </div>
);
