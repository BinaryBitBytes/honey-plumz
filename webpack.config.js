const path = require('path');

module.exports = {
  entry: '/src/components/FrontEnd/Products/Cards.jsx', // Set the path to your Cards.jsx file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development', // Move the 'mode' option to the top level
};
