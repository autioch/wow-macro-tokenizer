import React from 'react';
import Line from './line';
import './styles.css';

export default ({ lines }) => (
  <div>
    {lines.map((line, index) => (<Line key={index} line={line} />))}
  </div>
);
