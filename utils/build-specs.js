require('babel-register');

const {renderToString} = require('react-dom/server');
const React = require('react');
const path = require('path');
const fs = require('fs');
const pretty = require('pretty');

function makePretty(html) {
  return pretty(html.replace(/data-react[-0-9a-z="]*/g, ''));
}

fs.readdir('components', (err, components) => {
  if (err) {
    throw err;
  } else {
    components.forEach(component => {
      const componentPath = path.join('..', 'components', component, 'index.js')
      const Component = require(componentPath).default;
      const rendered = renderToString(React.createElement(Component, {}, null))

      const stream = fs.createWriteStream(path.join('components', component, 'spec.html'));
      stream.write(makePretty(rendered));
      stream.write('\n');
    });
  }
})
