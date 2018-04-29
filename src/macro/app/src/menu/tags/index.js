import React from 'react';
import './styles.css';

const noop = () => {}; // eslint-disable-line no-empty-function

export default ({ tags, action = noop }) => (
  <div className="tags">
    {tags.map((tag, index) =>
      <span
        key={index}
        className={`tag${tag.isSelected ? ' tag--selected' : ''}`}
        onClick={() => action(tag.id)}
        style={{
          color: tag.color
        }}
      >
        {tag.label}
      </span>
    )}
  </div>
);
