const moo = require('moo');

module.exports = moo.compile({
  command: {
    match: /^\/[a-zA-Z]+/,
    keywords: {
      chat: [
        '/p', '/party', '/ra', '/raid', '/bg', '/battleground', '/rw',
        '/g', '/guild', '/o', '/r', '/s', '/y', '/yell', '/w', '/whisper'
      ]
    }
  },
  channel: /^\/[\d]+/,
  tooltip: '#showtooltip',
  server: /^\.[a-zA-Z]+/,

  /* customs */
  linkProffesion: /\|.+\|Htrade:.+\|h\|r/,
  linkSpell: /\|.+\|Hspell:.+\|h\|r/,
  linkItem: /item:\d+:\d+/,

  spellLevel: /\(Rank \d+\)/,
  spellMode: ['(Shapeshift)', '(Bear)', '(Cat)', '(Demon)', '(Feral)', '(Racial)'],

  spellName: {
    match: /[a-zA-Z]+(?:(?: |'|-|: )[a-zA-Z]+)*/,
    keywords: {
      modifier: [
        'mod', 'modifier',
        'nomod', 'nomodifier',
        'target', 'focus', 'player',
        'notarget', 'nofocus', 'noplayer',
        'ctrl', 'shift', 'alt',
        'noctrl', 'noshift', 'noalt',
        'flyable', 'mounted',
        'noflyable', 'nomounted',
        'combat', 'harm', 'dead', 'exists',
        'nocombat', 'noharm', 'nodead', 'noexists',
        'button', '1', '2',
        'nobutton', '1', '2',
        'pet',
        'nopet',
        'channeling',
        'nochanneling'
      ]
    }
  },

  /* words */
  // word: /[a-zA-Z]+/,

  /* numbers */
  numberRange: /[0-9]+-[0-9]+/,
  numberDecimal: /[0-9]+(?:\.[0-9]+)/,
  number: /[0-9]+/,

  /* interpunction */
  at: '@',
  colon: ':',
  comma: ',',
  equal: '=',
  exclamation: '!',

  // add: '+',

  // bracketRoundClose: ')',
  // bracketRoundOpen: '(',
  bracketSquareClose: ']',
  bracketSquareOpen: '[',
  semicolon: ';',

  // separator: '|',
  slash: '/',
  dash: '-',

  space: /[ \t]+/,

  unknown: /.+?/
});
