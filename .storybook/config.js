import { configure, setAddon } from '@storybook/react';

import infoAddon from '@storybook/addon-info';
setAddon(infoAddon);

import 'normalize.css';

function loadStories() {
  // This is some stupid webpack magic. Basically, require in all files in '../src/components.'
  // http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
  let contextualRequire = require.context(
    '../src/components',
    true,
    // https://stackoverflow.com/a/30372240/4115328
    /^((?![\\/]node_modules|dist|template[\\/]).)*\/story.js$/,
  );
  contextualRequire.keys()
    .forEach(storybook => contextualRequire(storybook));
}

configure(loadStories, module);
