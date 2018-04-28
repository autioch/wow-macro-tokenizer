import React from 'react';
import Tags from '../tags';
import './styles.css';

export default ({ categories, action, visibleMacros, filterAction, filterText }) => (
  <div className="menu">
    <div>{visibleMacros.length} macros displayed</div>
    {categories.map((category) => <div className="category" key={category.id}>
      <div className="category__label">{category.label}</div>
      <Tags tags={category.tags} action={action} />
    </div>)}
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
