// This small bit of code permits exporting variables if not running in a commonjs environment.
const fs = require('fs');
const variables = fs.readdirSync('./variables');

const results = variables.map(name => {
  return `window['@density/ui/variables/${name}'] = ${
    JSON.stringify(require(`./variables/${name}`), null, 2)
  };`;
}, {});

console.log(results.join('\n'));
