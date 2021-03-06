export default [
  'http://www.wowhead.com/forums&topic=128550',
  'http://www.wowhead.com/forums&topic=78483',
  'https://forum.nostalrius.org/viewtopic.php?f=63&t=16693',
  'https://nirklars.wordpress.com/wow/vanilla-wow-macros/',
  'https://wow.gamepedia.com/Macro_commands',
  'https://wow.gamepedia.com/Macro_(1.0)',
  'http://retro-wow.com/forum/showthread.php?tid=3132',
  'http://wowwiki.wikia.com/wiki/Making_a_macro',
  'http://wowwiki.wikia.com/wiki/Useful_macros_(old)',
  'https://www.youtube.com/watch?v=3oK7piWOcRI',
  'http://wowprogramming.com/',
  'http://macro-wow.com/',
  'https://nirklars.wordpress.com/wow/vanilla-wow-lua-tips/',
  'http://wowwiki.wikia.com/wiki/Useful_macros_for_death_knights',
  'http://wowwiki.wikia.com/wiki/Slash_commands',
  'http://wowwiki.wikia.com/wiki/Blizzard_DebugTools',
  'https://stackoverflow.com/questions/12219237/primary-source-for-wow-lua-api',
  'https://stackoverflow.com/questions/32333997/world-of-warcraft-ui-custom-frame-without-addon',
  'https://wow.gamepedia.com/Lua_functions',
  'http://wowwiki.wikia.com/wiki/World_of_Warcraft_API',
  'https://stackoverflow.com/questions/18434189/wow-api-demote-all-people-with-some-rank',
  'https://www.gdatasoftware.com/blog/2016/07/28809-world-of-warcraft-one-simple-line-of-code-can-cost-you-dearly',
  'https://www.defcon.org/images/defcon-17/dc-17-presentations/defcon-17-mooney-luedke-subverting_wow_api.pdf'
]
  .map((link) => ({
    url: link,
    title: link.replace(/^https?:\/\//, '')
  }))
  .sort((a, b) => a.title.localeCompare(b.title));
