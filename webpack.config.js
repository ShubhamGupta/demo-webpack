const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

/* Basic minimum config */
// module.exports = {
//   entry: PATHS.app + '/profile.js',

//   output: {
//     filename: PATHS.build + '/Profile.js'
//   }
// };

/* Processing CSS */
// module.exports = {
//   entry: PATHS.app + '/profile.js',

//   output: {
//     path: PATHS.build,
//     filename: 'Profile.js'
//   },

//   module: {
//     loaders: [
//       {
//         test: /\.css$/,
//         loaders: ['style', 'css']
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Webpack Demo'
//     })
//   ]
// };

/* Multiple Entry Points */
// module.exports = {
//   entry: {
//     Profile: PATHS.app + '/profile.js',
//     Feed: PATHS.app + '/feed.js'
//   },
//   output: {
//     path: PATHS.build,
//     filename: '[name].js'
//   },
//   module: {
//     loaders: [
//      {
//        test: /\.css$/,
//        loaders: ['style', 'css']
//      }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Webpack Demo'
//     })
//   ]
// };

/* Generating finger-printed file names. */
module.exports = {
  entry: {
    Profile: PATHS.app + '/profile.js',
    Feed: PATHS.app + '/feed.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js'

  },
  module: {
    loaders: [
     {
       test: /\.css$/,
       loaders: ['style', 'css']
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo'
    })
  ]
};
