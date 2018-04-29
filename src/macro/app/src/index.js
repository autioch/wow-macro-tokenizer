import { createApp } from 'pipe-and-gauge';
import actions from './actions';
import initialState from './initialState';
import App from './App';
import './styles.css';

/* data */
import { categories, macros, tags } from './data';
import icons from './macroIcons';

const store = createApp(actions, initialState, App, document.getElementById('root'));

setTimeout(() => store.setData({
  categories,
  macros,
  tags,
  icons
}), 10);
