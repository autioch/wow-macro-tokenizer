import React, { Component } from 'react';

import Group from './group';
import Ambiguous from './ambiguous';
import Summary from './summary';
import lexerOutput from './data/output.json';
import lexerSummary from './data/summary.json';
import './App.css';

export default class App extends Component {
  state = {
    totalCount: lexerOutput.length,
    summary: lexerSummary,
    ambiguous: lexerOutput.filter((line) => line.parsed && line.ambiguous),
    failed: lexerOutput.filter((line) => !line.parsed),
    parsed: lexerOutput.filter((line) => line.parsed && !line.ambiguous),
    showSummary: !1,
    showAmbiguous: !1,
    showFailed: !1,
    showParsed: !!1
  }

  render() {
    const { state } = this;

    return (
      <div className="App">
        <div className="group__header">Summary</div>
        {state.showSummary ? <Summary summary={state.summary}/> : ''}
        <div className="group__header">Ambiguous ({state.ambiguous.length}/{state.totalCount})</div>
        {state.showAmbiguous ? <Ambiguous lines={state.ambiguous} /> : ''}
        <div className="group__header">Failed ({state.failed.length}/{state.totalCount})</div>
        {state.showFailed ? <Group lines={state.failed} /> : ''}
        <div className="group__header">Parsed ({state.parsed.length}/{state.totalCount})</div>
        {state.showParsed ? <Group lines={state.parsed} /> : ''}
      </div>
    );
  }
}
