module.exports = {
  "extends": [
    "react-app",
    "qb"
  ],
  rules: {
    'no-magic-numbers': ['error', {
      ignore: [0, 1, 10, 500]
    }],
    'id-length': ['off'],
    'no-unused-vars': ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'id-blacklist': ['off'],
    'no-process-env': ['off'],
    'no-inline-comments': ['off'],
    'line-comment-position': ['off'],
    'jsx-a11y/href-no-hash': ['off']
  }
};
