import React from 'react';
import Result from './result';
import './styles.css';

export default ({ line: { line, results, message } }) => {
  const interpretations = Array.isArray(results) ? results : [results];

  return (
    <div className="line">
      <div className="line__original">{line}</div>
      {message}
      {interpretations.map((items, index) => (
        <div key={index} className="line__results">
          {items.map((result, index2) => <Result key={index2} result={result} />)}
        </div>
      ))}
    </div>
  );
};
