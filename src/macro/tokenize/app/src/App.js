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
    showSummary: false,
    showAmbiguous: true,
    showFailed: true,
    showParsed: true,
    showLua: true,
    showMacro: false,
    showGeneric: false
  }

  filterLines(linesType) {
    const { showMacro, showLua, showGeneric } = this.state;
    const linesArr = this.state[linesType];
    let visibleLines = linesArr.filter((line) => line.grammar === '');

    if (showMacro) {
      visibleLines = visibleLines.concat(linesArr.filter((line) => line.grammar === 'macro'));
    }

    if (showLua) {
      visibleLines = visibleLines.concat(linesArr.filter((line) => line.grammar === 'lua'));
    }

    if (showGeneric) {
      visibleLines = visibleLines.concat(linesArr.filter((line) => line.grammar === 'generic'));
    }

    return visibleLines;
  }

  render() {
    const { state } = this;

    return (
      <div className="App">
        <div className="group__header">Summary</div>
        {state.showSummary ? <Summary summary={state.summary}/> : ''}
        <div className="group__header">Ambiguous ({state.ambiguous.length}/{state.totalCount})</div>
        {state.showAmbiguous ? this.filterLines('ambiguous').map((line, index) => <Ambiguous line={line} key={index} />) : ''}
        <div className="group__header">Failed ({state.failed.length}/{state.totalCount})</div>
        {state.showFailed ? this.filterLines('failed').map((line, index) => <Failed line={line} key={index} />) : ''}
        <div className="group__header">Parsed ({state.parsed.length}/{state.totalCount})</div>
        {state.showParsed ? this.filterLines('parsed').map((line, index) => <Parsed line={line} key={index} />) : ''}
      </div>
    );
  }
}
