import React from 'react';
import './styles.css';

export default ({ token: { type, value } }) => (
  <span className={`token token--${type}`} title={type}>
    {value}
  </span>
);
