// Render a HTML spec for each component from its react implementation.
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
      if (component == 'template') {
        return;
      }

      console.log(`* Rendering ${component}`);
      const componentPath = path.join('..', 'components', component, 'index.js')

      // By default, render the empty component. However, if the component exports a function named
      // `spec`, use whatever it returns as the template to generate the specs.
      const componentSpec = require(componentPath).spec;
      let rendered;
      if (componentSpec) {
        rendered = renderToString(componentSpec());
      } else {
        // Render the empty component.
        const Component = require(componentPath).default;
        rendered = renderToString(React.createElement(Component, {}, null))
      }

      const stream = fs.createWriteStream(path.join('components', component, 'spec.html'));
      stream.write(makePretty(rendered));
      stream.write('\n');
    });
  }
})
