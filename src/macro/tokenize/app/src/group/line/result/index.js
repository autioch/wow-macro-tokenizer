import React from 'react';
import './styles.css';

export default ({ result = {} }) => {
  const realResult = result === null ? {} : result;
  const { type, text = 'NULL' } = realResult;

  return (
    <div className={`result result--${type}`} title={type}>
      {type === 'space' ? '*' : text}
    </div>
  );
};
