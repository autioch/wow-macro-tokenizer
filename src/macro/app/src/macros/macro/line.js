import React from 'react';
import './line.css';

const Token = ({ token: { type, value } }) => (
  <span className={`token token--${type}`} title={`${type} token`}>
    {value}
  </span>
);

export default ({ line: { tokens, grammar } }) => (
  <div className={`line line--${grammar}`} title={`${grammar} type line`}>
    {tokens.map((token, index) => <Token key={index} token={token} />)}
  </div>
);
