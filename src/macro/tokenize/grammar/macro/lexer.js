const moo = require('moo');

module.exports = moo.compile({
  target: /\/target(?:lasttarget|target|enemy)*/,

  /* slash commands */
  command: {
    match: /^\/[a-zA-Z]+/,
    keywords: {
      chat: [
        '/p', '/party', '/ra', '/raid', '/bg', '/battleground', '/rw',
        '/g', '/guild', '/o', '/r', '/s', '/y', '/yell', '/w', '/whisper'
      ],
      emote: [
        '/em', '/kiss', '/lol', '/pity', '/rofl', '/facepalm', '/poke'
      ]
    }
  },
  channel: /^\/[\d]+/,
  tooltip: '#showtooltip',
  server: /^\.[a-zA-Z]+/,

  /* links */
  linkProfession: /\|.+?\|Htrade:.+?\|h\|r/,
  linkSpell: /\|.+?\|Hspell:.+?\|h\|r/,
  linkEnchant: /\|.+?\|Henchant:.+?\|h\|r/,
  linkItem: /item:\d+:\d+/,

  /* spell */
  spellLevel: /\(Rank \d+\)/,
  spellMode: ['(Shapeshift)', '(Bear)', '(Cat)', '(Demon)', '(Feral)', '(Racial)'],

  identifier: {
    match: /[a-zA-Z]+(?:(?: |'|-|: )[a-zA-Z]+)*(?: 4000)?/, // Blingtron
    keywords: {
      modifier: [
        'mod', 'modifier',
        'ctrl', 'shift', 'alt',
        'flyable', 'mounted',
        'combat', 'harm', 'dead', 'exists',
        'button',
        'pet',
        'channeling',
        'no'
      ],
      gameTarget: [
        'target', 'focus', 'player', 'pet', 'lasttarget', 'mouseover'
      ]
    }
  },

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
  bracketSquareClose: ']',
  bracketSquareOpen: '[',
  semicolon: ';',
  slash: '/',
  dash: '-',

  space: /[ \t]+/,
  unknown: /.+?/
});
