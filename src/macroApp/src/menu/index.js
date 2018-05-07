import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default () => (
  <div className="menu">
    <NavLink exact className="menu__link" to="/" activeClassName="menu__link--active">Macro list</NavLink>
    <NavLink className="menu__link" to="/howto" activeClassName="menu__link--active">How to</NavLink>
    <NavLink className="menu__link" to="/resources" activeClassName="menu__link--active">Resources</NavLink>
  </div>
);
