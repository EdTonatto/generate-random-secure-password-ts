const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '\\!@#$%^&*()+_-=}{[]|:;"/?.><,`~\'';
const similarCharacters = /[ilLI|`oO0]/g;
const strictRules = [
  { name: 'lowercase', rule: /[a-z]/ },
  { name: 'uppercase', rule: /[A-Z]/ },
  { name: 'numbers', rule: /[0-9]/ },
  { name: 'symbols', rule: /[\\!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~']/ },
];

function getCharPool() {}
