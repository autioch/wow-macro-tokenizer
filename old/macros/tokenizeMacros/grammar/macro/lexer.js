const moo = require('moo');

module.exports = moo.compile({
  target: /\/target(?:lasttarget|target|enemy|player|friend|exact)*/,

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
  tooltip: ['#showtooltip', '#Showtooltip'],
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
        'actionbar', 'alt', 'bar', 'bonusbar', 'btn', 'button', 'channeling', 'combat',
        'ctrl', 'dead', 'equipped', 'exists', 'flyable', 'flying', 'focus', 'form',
        'group:party', 'group:raid', 'harm', 'help', 'indoors', 'lasttarget', 'mod',
        'modifier', 'mounted', 'mouseover', 'nochanneling', 'nocombat', 'nodead',
        'noexists', 'noflyable', 'noflying', 'noharm', 'nomod', 'nomodifier', 'nomounted',
        'nopet', 'outdoors', 'party', 'pet', 'pettarget', 'player', 'raid', 'shift', 'spec',
        'stance', 'stealth', 'swimming', 'target', 'targettarget', 'worn'
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
