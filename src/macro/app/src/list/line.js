import React from 'react';
import './line.css';

const Token = ({ token: { type, value } }) => (
  <span className={`token token--${type}`} title={type}>
    {value}
  </span>
);

export default ({ line }) => (
  <div className="line">
    {line.map((token, index) => <Token key={index} token={token} />)}
  </div>
);
