const path = require('path');

module.exports = env => {
  if (env && env.NODE_ENV) {
    console.log('Environment: ', env.NODE_ENV)
  }

  return {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    entry: './src/containers/AppContainer.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ]
    }
  }
};
