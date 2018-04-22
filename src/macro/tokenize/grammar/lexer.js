const moo = require('moo');

module.exports = moo.compile({
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

  spellName: {
    match: /[a-zA-Z]+(?:(?: |'|-|: )[a-zA-Z]+)*/,
    keywords: {
      modifier: [
        'mod', 'modifier',
        'nomod', 'nomodifier',
        'target', 'focus', 'player', 'pettarget',
        'notarget', 'nofocus', 'noplayer', 'pettarget',
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
