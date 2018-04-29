import React from 'react';
import Tags from './tags';
import './index.css';

export default ({
  state: { tags, categories, macros, visibleMacros, filterText },
  store: { toggleTag, setTextFilter }
}) => (
  <div className="menu">
    {categories.map((category) => <div className="category" key={category.id}>
      <div className="category__label">{category.label}</div>
      <Tags tags={tags.filter((tag) => tag.category === category.id)} action={toggleTag} />
    </div>)}
    <div className="category">
      <div className="category__label">Search text</div>
      <input
        className="menu__input"
        type="text"
        value={filterText}
        onChange={(ev) => setTextFilter(ev.target.value)}
        onInput={(ev) => setTextFilter(ev.target.value)}
      />
      <div className="menu__text">{visibleMacros.length} / {macros.length} macros</div>
    </div>
  </div>
);
