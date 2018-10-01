const fs = require('fs');
const path = require('path');
const jsonImporter = require('@density/node-sass-json-importer');

// Create aliases when importing each component to reference the current component state in this
// project. For example,
// @density/ui-button => /Users/ryan/w/densityco/ui/src/components/button/index.js
const alias = { '@density/ui': path.normalize(path.join(__dirname, '..')) };
const COMPONENTS_BASE_PATH = path.join(__dirname, '..', 'src', 'components');
fs.readdirSync(COMPONENTS_BASE_PATH).forEach(component => {
  alias[`@density/ui-${component}`] = path.normalize(
    path.join(COMPONENTS_BASE_PATH, component, 'index.js')
  );
});
console.log(alias)

module.exports = {
  resolve: { alias },
  module: {
    rules: [
      // *.scss files are processed through three steps:
      // - style-loader, which includes them in the output bundle and will include a style tag in
      //   the dom when the component's compiled bundle is loaded.
      // - css-loader, which does the css modules transformations - this means each class name in
      //   each file is rewritten so it only targets the elements that are desired.
      // - sass-loader, which does the sass compilation with node-sass. In addition, this uses
      //   node-sass-json importer to permit importing of json files containing variables.
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              /* for example, dui-styles-button-1SZwRzu8 */
              localIdentName: 'dui-[name]-[local]-[hash:base64:8]',
            },
          },
          {
            loader: 'sass-loader',
            // Apply the JSON importer via sass-loader's options.
            options: {
              importer: jsonImporter,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
