module.exports = function parseCustomMacro(macro) {
  const lines = macro.trim().split('\n').map((line) => line.trim());

  console.log('##');
  console.log(macro);

  return {
    id: '',
    prefix: '',
    label: '',
    icon: '',
    lines
  };
};
