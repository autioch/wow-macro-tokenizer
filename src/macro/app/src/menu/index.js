import React from 'react';
import Tags from '../tags';
import './styles.css';

export default ({ tags, action, visibleMacros, filterAction, filterText }) => (
  <div className="menu">
    <div>{visibleMacros.length} macros displayed</div>
    <Tags tags={tags} action={action} />
    <div>
      Search for text:
      <input
        type="text"
        value={filterText}
        onChange={(ev) => filterAction(ev.target.value)}
        onInput={(ev) => filterAction(ev.target.value)}
      />
    </div>
  </div>
);
