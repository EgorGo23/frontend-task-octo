const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const os = require('os');

const isWindows = os.type() === 'Windows_NT';
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const babelOptions = (preset) => {
  const opts = {
    presets: [
      '@babel/preset-env',
    ],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

module.exports = {
  mode: 'none',
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
    alias: {
      
    },
  },
  devServer: {
    historyApiFallback: true,
    port: 4100,
    open: isWindows ? 'chrome' : 'google-chrome',
  },
  devtool: isDev ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions(),
        },
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react'),
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/public/index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles_bundle.css',
    }),
  ],
};
