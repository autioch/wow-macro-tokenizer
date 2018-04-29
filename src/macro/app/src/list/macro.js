import React from 'react';

const Token = ({ token: { type, value } }) => (
  <span className={`token token--${type}`} title={type}>
    {value}
  </span>
);

const Line = ({ line }) => (
  <div className="line">
    {line.map((token, index) => <Token key={index} token={token} />)}
  </div>
);

const Tag = ({ tag }) => (
  <span className="tag" style={{
    color: tag.color
  }} >
    {tag.label}
  </span>
);

const Icon = ({ icon }) => (
  <img
    className="macro__icon"
    alt=""
    title={icon.label}
    src={`http://wow.zamimg.com/images/wow/icons/large/${icon.link}.jpg`}
    onError={(ev) => ev.target.parentNode.remove()}
  />
);

export default ({ macro, style }) => (
  <div className="macro" style={style}>
    <div className="macro__header">
      <span className="macro__icons">
        {macro.icons.map((icon, index2) => <Icon key={index2} icon={icon} />)}
      </span>
      <span className="macro__label">{macro.label}</span>
      <span className="macro__count">Seen {macro.occurences} times</span>
    </div>
    <div className="tags">
      {macro.tags.map((tag, index2) => <Tag key={index2} tag={tag}/>)}
    </div>
    <div className="macro__lines">
      {macro.lines.map((line, index2) => <Line key={index2} line={line}/>)}
    </div>
  </div>
);
