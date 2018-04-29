import createStore from 'pipe-and-gauge/src/createStore';
import actions from './actions';
import initialState from './initialState';
import App from './App';
import './styles.css';
import React from 'react';
import { render } from 'react-dom';

/* data */
import { categories, macros, tags } from './data';
import icons from './macroIcons';

const store = createStore(actions, initialState);

store.subscribe(({ state }) => render(<App state={state} store={store}/>, document.getElementById('root')));

setTimeout(() => store.setData({
  categories,
  macros,
  tags,
  icons
}), 10);
