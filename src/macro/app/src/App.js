import React from 'react';
import Macros from './macros';
import HowTo from './howto';
import Menu from './menu';
import Resources from './resources';
import { homepage } from '../package.json';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default ({ store, state }) => (
  <div className="App">
    <Router basename={homepage}>
      <div className="container">
        <Menu />
        <Route exact path="/" render={() => <Macros state={state} store={store} /> } />
        <Route path="/howto" component={HowTo} />
        <Route path="/resources" component={Resources} />
      </div>
    </Router>
  </div>
);
