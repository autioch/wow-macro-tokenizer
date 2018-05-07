import React from 'react';
import List from './list';
import Filters from './filters';
import './index.css';

export default ({ state, store }) => (
  <div className="macros">
    <Filters state={state} store={store} />
    <List macros={state.visibleMacros} />
  </div>
);
