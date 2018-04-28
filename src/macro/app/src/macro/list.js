import React from 'react';
import Item from './index';
import { CellMeasurer, CellMeasurerCache, AutoSizer, List } from 'react-virtualized';

const cache = new CellMeasurerCache({
  fixedWidth: true
});

document.addEventListener('resize', () => cache.resetAll());

export default ({ macros }) => (
  <div className="macros">
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={macros.length}
          deferredMeasurementCache={cache}
          rowHeight={cache.rowHeight}
          rowRenderer={({ index, key, parent, style }) => ( // eslint-disable-line no-shadow
            <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index} >
              <Item style={style} key={index} index={index} macro={macros[index]} />
            </CellMeasurer>
          )}
        />
      )}
    </AutoSizer>
  </div>
);
