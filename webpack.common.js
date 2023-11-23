const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Homepage',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/index.html'),
      meta: {
        viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Add Story',
      filename: 'addStory.html',
      template: path.resolve(__dirname, 'src/views/AddStory.html'),
      meta: {
        viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      },
    }),
    // Auth pages
    new HtmlWebpackPlugin({
      title: 'Login',
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/views/auth/Login.html'),
      meta: {
        viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Register',
      filename: 'register.html',
      template: path.resolve(__dirname, 'src/views/auth/Register.html'),
      meta: {
        viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      },
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'public/'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
