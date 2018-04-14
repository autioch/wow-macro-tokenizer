import React from 'react';
import './styles.css';

export default ({ result: { type, text } }) => (
  <div className={`result result--${type}`}>
    {type === 'space' ? '*' : text}
  </div>
);
