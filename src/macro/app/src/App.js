import React from 'react';
import List from './list';
import Menu from './menu';

export default ({ store, state }) => (
  <div className="App">
    <Menu state={state} store={store} />
    <List macros={state.visibleMacros} />
  </div>
);
