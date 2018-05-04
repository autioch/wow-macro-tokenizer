import React from 'react';
import links from './links';
import './index.css';

export default () => (
  <div className="resources">
    <ul className="resources__list">
      {links.map((link, index) => (
        <li className="resource-item" key={index}>
          <a className="resource-link" target="_blank" href={link.url} >{link.title}</a>
        </li>
      ))}
    </ul>
  </div>
);
