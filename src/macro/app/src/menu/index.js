import React from 'react';
import Tags from './tags';
import './styles.css';

export default ({ state: { categories, visibleMacros, filterText }, store: { setTagFilter, setTextFilter } }) => (
  <div className="menu">
    <div>{visibleMacros.length} macros displayed</div>
    {categories.map((category) => <div className="category" key={category.id}>
      <div className="category__label">{category.label}</div>
      <Tags tags={category.tags} action={setTagFilter} />
    </div>)}
    <div>
      Search for text:
      <input
        type="text"
        value={filterText}
        onChange={(ev) => setTextFilter(ev.target.value)}
        onInput={(ev) => setTextFilter(ev.target.value)}
      />
    </div>
  </div>
);
