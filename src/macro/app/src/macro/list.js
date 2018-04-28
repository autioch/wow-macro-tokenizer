import React from 'react';
import Item from './index';
import { AutoSizer, List } from 'react-virtualized';

const HEADER_HEIGHT = 32;
const PADDING = 14;
const TAGS = 41;
const LINES = 30;
const LINE_HEIGHT = 17;

const MIN_HEIGHT = HEADER_HEIGHT + PADDING + LINES;

function calculateMacroHeight(macro) {
  return MIN_HEIGHT + (macro.tags.length ? TAGS : 0) + (macro.lines.length * LINE_HEIGHT);
}

export default ({ macros }) => (
  <div className="macros">
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={macros.length}
          rowHeight={({ index }) => calculateMacroHeight(macros[index]) }
          rowRenderer={ ({ index, style }) => <Item style={style} key={index} index={index} macro={macros[index]} /> }
        />
      )}
    </AutoSizer>
  </div>
);
