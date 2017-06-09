const path = require('path');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"],
//         include: path.resolve(__dirname, '../')
//       }
//     ]
//   }
// }


const jsonImporter = require('@density/node-sass-json-importer');

// Webpack config
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
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
