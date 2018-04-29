import { keyBy, flattenDeep, countBy, flatten } from 'lodash';

function setVisibleMacros({ state: { macros, filterText, tags } }) {
  let visibleMacros = macros;

  /* Filter by search text */
  if (filterText.length) {
    visibleMacros = visibleMacros
      .filter((macro) => macro.tokens.some((token) => token.value.includes(filterText)));
  }

  /* Filter by active tags */
  const selTags = tags.filter((tag) => tag.isSelected);

  if (selTags.length) {
    visibleMacros = visibleMacros
      .filter((macro) => macro.tags.some((tag) => selTags.some((selTag) => selTag.id === tag.id)));
  }

  const counts = countBy(flatten(visibleMacros.map((macro) => macro.tags)), (tag) => tag.id);

  return {
    visibleMacros,
    tags: tags.map((tag) => ({
      ...tag,
      count: counts[tag.id] || 0
    }))
  };
}

function setTextFilter({ data, store }) {
  store
    .setState({
      filterText: data.trim().toLowerCase()
    })
    .setVisibleMacros();
}

function toggleTag({ state, data, store }) {
  store
    .setState({
      tags: state.tags.map((tag) => {
        if (tag.id !== data) {
          return tag;
        }

        return {
          ...tag,
          isSelected: !tag.isSelected
        };
      })
    })
    .setVisibleMacros();
}

function setData({ store, data: { tags, icons, macros, categories } }) {
  const tagIdDict = keyBy(tags, 'id');
  const lowCaseIcons = Object.entries(icons).reduce((obj, [key, value]) => {
    obj[key.toLowerCase()] = value;

    return obj;
  }, []);

  store
    .setState({
      tags,
      macros: macros.map((macro, index) => ({
        id: index,
        ...macro,
        labels: macro.label,
        tokens: flattenDeep(macro.lines).map((token) => ({
          ...token,
          value: token.value.toLowerCase()
        })),
        tags: macro.tags.map((tagId) => tagIdDict[tagId]),
        icons: macro.icon.map((icon) => ({
          label: icon,
          src: lowCaseIcons[icon.toLowerCase()]
        }))
      })),
      categories: Object.entries(categories).map(([label, id]) => ({
        id,
        label
      }))
    })
    .setVisibleMacros();
}

export default {
  setState: ({ data }) => data,
  setData,
  setVisibleMacros,
  setTextFilter,
  toggleTag
};
