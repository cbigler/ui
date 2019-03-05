import '!css-loader!normalize.css';
import 'moment-timezone';

import { configure, addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
addDecorator(withInfo({
	inline: true,
	styles: styles => {
		return {
			...styles,
			infoStory: {
				paddingLeft: 40,
				paddingRight: 40,
			},
		};
	},
}));

// First story, serves as a "home page"
import '../src/welcome.js';

function loadStories() {
  // This is some stupid webpack magic. Basically, require in all files in '../src/reports.'
  // http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
  let contextualRequire = require.context('../src', true, /story.js$/);
  contextualRequire.keys().forEach(storybook => contextualRequire(storybook));
}

configure(loadStories, module);
