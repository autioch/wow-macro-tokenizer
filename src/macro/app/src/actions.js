import categories from './data/categories';
import macros from './data/tagger';
import tags from './data/tags';
import { keyBy, flattenDeep, groupBy, countBy, flatten } from 'lodash';

export function setState({ data }) {
  return data;
}

export function setVisibleMacros({ state }) {
  let visibleMacros = state.macros;

  /* Filter by search text */
  if (state.filterText.length) {
    visibleMacros = visibleMacros
      .filter((macro) => macro.tokens.some((token) => token.value.includes(state.filterText)));
  }

  /* Filter by active tags */
  const selTags = state.tags.filter((tag) => tag.isSelected);

  if (selTags.length) {
    visibleMacros = visibleMacros
      .filter((macro) => macro.tags.some((tag) => selTags.some((selTag) => selTag.id === tag.id)));
  }

  return {
    visibleMacros
  };
}

export function setTagCounts({ state }) {
  const counts = countBy(flatten(state.visibleMacros.map((macro) => macro.tags)), (tag) => tag.id);

  return {
    tags: state.tags.map((tag) => ({
      ...tag,
      count: counts[tag.id]
    }))
  };
}

export function toggleTag({ state, data }) {
  return {
    tags: state.tags.map((tag) => {
      if (tag.id !== data) {
        return tag;
      }

      return {
        ...tag,
        isSelected: !tag.isSelected
      };
    })
  };
}

export function resetTags({ state }) {
  return {
    tags: state.tags.map((tag) => ({
      ...tag,
      isSelected: false
    }))
  };
}

export function setTextFilter({ data, store }) {
  store
    .setState({
      filterText: data.trim().toLowerCase()
    })
    .setVisibleMacros()
    .setTagCounts();
}

export function resetTextFilter({ store }) {
  store
    .setState({
      filterText: ''
    })
    .setVisibleMacros()
    .setTagCounts();
}

export function setTagFilter({ data, store }) {
  store.toggleTag(data).setVisibleMacros().setTagCounts();
}

export function resetTagFilter({ store }) {
  store.resetTags().setVisibleMacros().setTagCounts();
}

export function loadData({ store }) {
  setTimeout(() => {
    const tagIdDict = keyBy(tags, 'id');
    const tagCategoryDict = groupBy(tags, 'category');

    store
      .setState({
        isLoading: false,
        macros: macros.map((macro) => ({
          ...macro,
          tokens: flattenDeep(macro.lines).map((token) => ({
            ...token,
            value: token.value.toLowerCase()
          })),
          tags: macro.tags.map((tagId) => tagIdDict[tagId])
        })),
        categories: Object.entries(categories).map(([label, id]) => ({
          id,
          label,
          tags: tagCategoryDict[id]
        }))
      })
      .setVisibleMacros()
      .setTagCounts();
  }, 2000);

  return {
    isLoading: true
  };
}
