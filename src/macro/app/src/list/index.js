import React, { PureComponent } from 'react';
import Macro from './macro';
import { CellMeasurer, CellMeasurerCache, AutoSizer, List } from 'react-virtualized';
import './index.css';

export default class MacroList extends PureComponent {
  constructor(props) {
    super(props);

    this.rowRenderer = this.rowRenderer.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.keyMapper = this.keyMapper.bind(this);
    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      keyMapper: this.keyMapper
    });
  }
  resetCache() {
    this.cache.resetAll();
  }
  keyMapper(index) {
    return this.props.macros[index].id;
  }
  componentDidMount() {
    document.addEventListener('resize', this.resetCache);
  }
  componentDidUpdate() {
    this.list.recomputeRowHeights();
  }
  componentWillUnmount() {
    document.removeEventListener('resize', this.resetCache);
  }
  rowRenderer({ index, key, parent, style }) { // eslint-disable-line no-shadow
    const macro = this.props.macros[index];

    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={0}
        key={key}
        rowIndex={index}
        parent={parent}
      >
        <Macro style={style} macro={macro} />
      </CellMeasurer>
    );
  }
  render() {
    const { cache, props: { macros } } = this;

    return (
      <div className="macro-list">
        <AutoSizer>
          {({ height, width }) => (
            <List
              deferredMeasurementCache={cache}
              height={height}
              rowCount={macros.length}
              rowHeight={cache.rowHeight}
              rowRenderer={this.rowRenderer}
              width={width}
              ref={(ref) => {
                this.list = ref;
              }}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
