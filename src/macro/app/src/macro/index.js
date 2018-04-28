import React from 'react';
import Line from './line';
import Tags from '../tags';

export default ({ macro, style, index }) => (
  <div className="macro" style={style}>
    <div className="macro__header">
      <span className="macro__index">{index + 1}.</span>
      <span className="macro__label">{macro.label.join(', ')}</span>
      <span className="macro__count">Seen {macro.occurences} times</span>
    </div>
    <Tags tags={macro.tags}/>
    <div className="macro__lines">
      {macro.lines.map((line, index2) => <Line key={index2} line={line}/>)}
    </div>
  </div>
);
