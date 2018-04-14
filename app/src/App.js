import React, { Component } from 'react';
import Line from './line';

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
    const { lines /* , summary */ } = this.state;

    return (
      <div className="App">
        {/* <Summary summary={summary} /> */}
        {lines.map((line, index) => (<Line key={index} line={line} />))};
      </div>
    );
  }
}
