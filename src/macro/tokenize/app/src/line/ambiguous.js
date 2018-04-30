import React from 'react';

const Pre = ({ items }) => (
  <pre className="line__results">
    {JSON
      .stringify(items, null, '  ')
      .split('\n')
      .map((line, index) => <div key={index}>{line}</div>)}
  </pre>
);

export default ({ line: { line, tokens = [] } }) => (
  <div className="line">
    <div className="line__original">{line}</div>
    {tokens.map((items, index) => <Pre key={index} items={items}/>)}
  </div>
);
