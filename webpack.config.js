const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = env => {
  if (env && env.NODE_ENV) {
    console.log('Environment: ', env.NODE_ENV)
  }

  return {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public'
    },
    entry: './src/containers/AppContainer.js',
    output: {
      path: path.resolve(__dirname, 'public'),
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
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'WEATHER_URL': JSON.stringify(process.env.WEATHER_URL),
          'WEATHER_APP_ID': JSON.stringify(process.env.WEATHER_APP_ID)
        }
      })
    ]
  }
};
