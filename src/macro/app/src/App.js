import React, { Component } from 'react';
import './App.css';
import categories from './data/categories';
import macros from './data/tagger';
import tags from './data/tags';
import { keyBy, flattenDeep, debounce } from 'lodash';
import Macros from './macro/list';
import Menu from './menu';

const tagDict = keyBy(tags, 'id');
const taggedMacros = macros.map((macro) => ({
  ...macro,
  tokens: flattenDeep(macro.lines).map((token) => ({
    ...token,
    value: token.value.toLowerCase()
  })),
  tags: macro.tags.map((tagId) => tagDict[tagId])
}));

class App extends Component {
  state = {
    categories,
    tags,
    macros: taggedMacros,
    visibleMacros: taggedMacros,
    filterText: ''
  }
  constructor(...args) {
    super(...args);
    this.selectTag = this.selectTag.bind(this);
    this.filterByText = debounce(this.filterByText.bind(this), 250);
  }

  setVisibleMacros({ currentTags = this.state.tags, filterText = this.state.filterText }) {
    let visibleMacros = this.state.macros;

    /* Filter by search text */
    if (filterText.length) {
      visibleMacros = visibleMacros
        .filter((macro) => macro.tokens.some((token) => token.value.includes(filterText)));
    }

    /* Filter by active tags */
    const selTags = currentTags.filter((tag) => tag.isSelected);

    if (selTags.length) {
      visibleMacros = visibleMacros
        .filter((macro) => macro.tags.some((tag) => selTags.some((selTag) => selTag.id === tag.id)));
    }

    this.setState({
      visibleMacros,
      tags: currentTags,
      filterText
    });
  }

  selectTag(tagId) {
    this.setVisibleMacros({
      currentTags: this.state.tags.map((tag) => {
        if (tag.id !== tagId) {
          return tag;
        }

        return {
          ...tag,
          isSelected: !tag.isSelected
        };
      })
    });
  }

  filterByText(text) {
    this.setVisibleMacros({
      filterText: text.toLowerCase()
    });
  }

  render() {
    return (
      <div className="App">
        <Menu
          tags={this.state.tags}
          action={this.selectTag}
          visibleMacros={this.state.visibleMacros}
          filterText={this.filterText}
          filterAction={this.filterByText}
        />
        <Macros macros={this.state.visibleMacros} />
      </div>
    );
  }
}

export default App;
