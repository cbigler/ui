import { configure, setAddon } from '@storybook/react';

import infoAddon from '@storybook/addon-info';
setAddon(infoAddon);

function loadStories() {
  // This is some stupid webpack magic. Basically, require in all files in '../stories.'
  // http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
  let contextualRequire = require.context('../stories', true, /.*/);
  contextualRequire.keys().forEach(storybook => {
    contextualRequire(storybook);
  });
}

configure(loadStories, module);
