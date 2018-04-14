import React, { Component } from 'react';
import Line from './line';
import lexerOutput from './output.json';
import './App.css';

export default class App extends Component {
  state = {
    lines: lexerOutput
  }

  render() {
    const { lines } = this.state;

    return (
      <div className="App">
        {lines.map((line, index) => (<Line key={index} line={line} />))};
      </div>
    );
  }
}
