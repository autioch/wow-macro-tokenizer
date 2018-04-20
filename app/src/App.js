import React, { Component } from 'react';
import Group from './group';

// import Summary from './summary';
import lexerOutput from './data/output.json';
import lexerSummary from './data/summary.json';
import './App.css';

export default class App extends Component {
  state = {
    lines: lexerOutput,
    summary: lexerSummary
  }

  render() {
    const { lines } = this.state;

    return (
      <div className="App">
        <Group header="Parsed" lines={lines.filter((line) => line.parsed && line.ambiguous)} />
        {/* <Group header="Failed" lines={lines.filter((line) => !line.parsed)} /> */}
      </div>
    );
  }
}
