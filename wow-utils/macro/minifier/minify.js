module.exports = function minify(tagged) {
  return tagged.map((macro) => ({
    content: macro.content,
    label: macro.label,
    prefix: macro.prefix,
    icon: macro.icon,
    tags: macro.tags
  }));
};
