module.exports = [{
  lines: [
    '/use [harm][@targettarget]Smite'
  ]
}, {
  lines: [
    '#showtooltip',
    '/cast [mod:alt,@player] [@mouseover,help,nodead] [help] [@targettarget,help] [] SPELL'
  ]
}, {
  lines: [
    '/cast [harm,nodead] Smite; [help,nodead][@player] Renew'
  ]
}, {
  lines: [
    '/cast [mod:shift,@mouseover] Power Word: Shield; [@mouseover] Renew'
  ]
}, {
  lines: [
    '/run if(ShowingHelm()) then ShowHelm(0) else ShowHelm(1) end'
  ]
}, {
  lines: [
    '/assist'
  ]
}, {
  lines: [
    '/cancelform'
  ]
}, {
  lines: [
    '/changeactionbar 1'
  ]
}, {
  lines: [
    '/equipset PvP_Set'
  ]
}, {
  lines: [
    '/petaggressive',
    '/petdefensive',
    '/petpassive'
  ]
}];
