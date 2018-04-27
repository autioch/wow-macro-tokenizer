import React from 'react';

export default ({ line: { line, results } }) => {
  const interpretations = Array.isArray(results) ? results : [results];

  return (
    <div className="line">
      <div className="line__original">{line}</div>
      {interpretations.map((items, index) => (<pre key={index} className="line__results">
        {JSON.stringify(items, null, '  ')}
      </pre>))}
    </div>
  );
};
