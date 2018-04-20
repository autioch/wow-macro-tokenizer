import React from 'react';
import Line from '../line';
import './styles.css';

export default ({ lines, header }) => (
  <div>
    <div className="group__header">{`${header} (${lines.length})`}</div>
    {lines.map((line, index) => (<Line key={index} line={line} />))}
  </div>
);
