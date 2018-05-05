import React from 'react';
import Line from './line';
import './macro.css';

const Icon = ({ icon }) => (
  <img className="macro__icon" alt="" title={icon.label} src={icon.src} />
);

const Tag = ({ tag }) => (
  <li className="macro__tag" style={{
    color: tag.color
  }}>
    {tag.label}
  </li>
);

const Label = ({ label }) => (
  <span className="macro__label">
    {label}
  </span>
);

export default ({ macro, style }) => (
  <div className="macro" style={style}>
    <div className="macro__description">
      <div className="macro__header">
        {macro.icons.map((icon, index2) => <Icon key={index2} icon={icon} />)}
        {macro.labels.map((label, index2) => <Label key={index2} label={label} />)}
      </div>
      <ul className="macro__tags">{macro.tags.map((tag, index2) => <Tag key={index2} tag={tag}/>)}</ul>
    </div>
    <div className="macro__lines">{macro.lines.map((line, index2) => <Line key={index2} line={line}/>)}</div>
  </div>
);
