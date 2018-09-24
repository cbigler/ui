// webpack.config.js
// This file is copied into src/components/<my component> and `webpack` is run inside to build a
// production bundle that is deployed.
//
// Some reference materials since webpack is a beast:
// - https://webpack.js.org/guides/author-libraries/
//
const path = require('path');
const jsonImporter = require('@density/node-sass-json-importer');

const componentName = __dirname.match(/\/components\/(.+)/)[1];

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: `densityUi${componentName.replace('-', '')}`,
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
  },
  module: {
    loaders: [
      // Babel transpiles new javascript to es5.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env", /* use "modern" javascript, whatever that means */
              "@babel/preset-react", /* compile jsx => React.createElement */
            ],
            plugins: [
              // convert async / await => generators, then babel converts generators => regenerator-runtime
              "babel-plugin-transform-async-to-generator",
            ],
          },
        },
      },

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
