import { categories, macros, tags } from './data';
import { keyBy, flattenDeep, groupBy, countBy, flatten } from 'lodash';

function setState({ data }) {
  return data;
}

function setVisibleMacros({ state }) {
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

function setTagCounts({ state }) {
  const counts = countBy(flatten(state.visibleMacros.map((macro) => macro.tags)), (tag) => tag.id);

  return {
    tags: state.tags.map((tag) => ({
      ...tag,
      count: counts[tag.id]
    }))
  };
}

function toggleTag({ state, data }) {
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

function resetTags({ state }) {
  return {
    tags: state.tags.map((tag) => ({
      ...tag,
      isSelected: false
    }))
  };
}

function setTextFilter({ data, store }) {
  store
    .setState({
      filterText: data.trim().toLowerCase()
    })
    .setVisibleMacros()
    .setTagCounts();
}

function resetTextFilter({ store }) {
  store
    .setState({
      filterText: ''
    })
    .setVisibleMacros()
    .setTagCounts();
}

function setTagFilter({ data, store }) {
  store.toggleTag(data).setVisibleMacros().setTagCounts();
}

function resetTagFilter({ store }) {
  store.resetTags().setVisibleMacros().setTagCounts();
}

function loadData({ store }) {
  setTimeout(() => {
    const tagIdDict = keyBy(tags, 'id');
    const tagCategoryDict = groupBy(tags, 'category');

    store
      .setState({
        isLoading: false,
        tags,
        macros: macros.map((macro, index) => ({
          id: index,
          ...macro,
          label: macro.label.join(', '),
          tokens: flattenDeep(macro.lines).map((token) => ({
            ...token,
            value: token.value.toLowerCase()
          })),
          tags: macro.tags.map((tagId) => tagIdDict[tagId]),
          icons: macro.icon.map((icon) => ({
            label: icon,
            link: icon.toLowerCase()
          }))
        })),
        categories: Object.entries(categories).map(([label, id]) => ({
          id,
          label,
          tags: tagCategoryDict[id]
        }))
      })
      .setVisibleMacros()
      .setTagCounts();
  }, 1000);

  return {
    isLoading: true
  };
}

export default {
  setState,
  setVisibleMacros,
  setTagCounts,
  toggleTag,
  resetTags,
  setTextFilter,
  resetTextFilter,
  setTagFilter,
  resetTagFilter,
  loadData
};
