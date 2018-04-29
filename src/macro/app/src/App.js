import React from 'react';
import Macros from './macro/list';
import Menu from './menu';

export default ({ store, state }) => (
  <div className="App">
    <Menu state={state} store={store} />
    <Macros macros={state.visibleMacros} />
  </div>
);
