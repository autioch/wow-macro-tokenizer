import React from 'react';
import Result from './result';
import './styles.css';

export default ({ line: { line, results, message } }) => {
  const interpretations = Array.isArray(results) ? results : [results];

  return (
    <div className="line">
      <div className="line__original">{line}</div>
      {interpretations.map((items) => (<div className="line__results">
        {message}
        {items.map((result, index) => <Result key={index} result={result} />)}
      </div>))}
    </div>
  );
};
