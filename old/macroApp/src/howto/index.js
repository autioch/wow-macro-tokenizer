import React from 'react';
import items from './definitions';
import Item from './item';
import './index.css';

export default () => (
  <div className="howto">
    <h3>How to - <i>Work in progress</i></h3>
    <p>This is list of common problems, that I encounter when talking about macros or making macros.</p>
    <p><strong>The list is in preparation and will be expanded in time.</strong></p>
    <ul className="howto__list">
      {items.map((item, index) => <Item key={index} item={item}/>)}
    </ul>
  </div>
);
