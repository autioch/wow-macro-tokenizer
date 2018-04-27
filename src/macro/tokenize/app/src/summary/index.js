import React from 'react';
import './styles.css';

export default ({ summary }) => (
  <div className="summary">
    {summary.map((item, index) =>
      <div className="summary__row" key={index}>
        <div className="summary__type">{item.type}</div>
        <div className="summary__texts">{item.values.join(', ')}</div>
      </div>
    )}
  </div>
);
