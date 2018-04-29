import React from 'react';
import './tags.css';

export default ({ tags, action }) => (
  <div className="menu__tags">
    {tags.map((tag, index) =>
      <span
        key={index}
        className={`menu__tag${tag.isSelected ? ' menu__tag--selected' : ''}`}
        onClick={() => action(tag.id)}
        style={{
          color: tag.color
        }}
      >
        {tag.label} {tag.count}
      </span>
    )}
  </div>
);
