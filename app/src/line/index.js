import React from 'react';
import Result from './result';
import './styles.css';

export default ({ line: { line, results } }) => {
  const items = Array.isArray(results) ? results : [results];

  return (
    <div className="line">
      <div className="line__original">{line}</div>
      <div className="line__results">
        {items.map((result, index) => <Result key={index} result={result} />)}
      </div>
    </div>
  );
};
