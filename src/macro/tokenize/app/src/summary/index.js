import React from 'react';
import './styles.css';

export default ({ summary }) => {
  const lines = Object.entries(summary);

  return (
    <div className="summary">
      {lines.filter((line) => line[0] !== 'word').map((line, index) =>
        <div className="summary__row" key={index}>
          <div className="summary__type">{line[0]}</div>
          <div className="summary__texts">{line[1].map((item, index2) => <div key={index2}>{item}</div>)}</div>
        </div>
      )}
    </div>
  );
};
