import React, { Component } from 'react';
import Summary from './summary';
import { Ambiguous, Failed, Parsed } from './line';
import { lines, summary } from './data.json';

export default class App extends Component {
  state = {
    summary,
    totalCount: lines.length,
    ambiguous: lines.filter((line) => line.parsed && line.ambiguous),
    failed: lines.filter((line) => !line.parsed),
    parsed: lines.filter((line) => line.parsed && !line.ambiguous),
    showSummary: true,
    showAmbiguous: true,
    showFailed: true,
    showParsed: true
  }

  render() {
    const { state } = this;

    return (
      <div className="App">
        <div className="group__header">Summary</div>
        {state.showSummary ? <Summary summary={state.summary}/> : ''}
        <div className="group__header">Ambiguous ({state.ambiguous.length}/{state.totalCount})</div>
        {state.showAmbiguous ? state.ambiguous.map((line, index) => <Ambiguous line={line} key={index} />) : ''}
        <div className="group__header">Failed ({state.failed.length}/{state.totalCount})</div>
        {state.showFailed ? state.failed.map((line, index) => <Failed line={line} key={index} />) : ''}
        <div className="group__header">Parsed ({state.parsed.length}/{state.totalCount})</div>
        {state.showParsed ? state.parsed.map((line, index) => <Parsed line={line} key={index} />) : ''}
      </div>
    );
  }
}
