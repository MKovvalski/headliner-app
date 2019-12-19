const path = require('path')
const fs = require('fs')
const chalkAnimation = require('chalk-animation')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const PORT = '8000'
const HOST = 'localhost'

const paths = {
  appAssets: resolveApp('src/assets'),
  appBuild: resolveApp('build'),
  appConfig: resolveApp('config'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.tsx'),
  appSrc: resolveApp('src')
}

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.min.js',
    publicPath: '/'
  },
  devtool: 'eval', // fastest mode for development
  devServer: {
    open: false,
    port: PORT,
    overlay: {
      warnings: false,
      errors: true
    },
    quiet: false,
    noInfo: true, // hide build info in console
    watchContentBase: true, // reload page if static files change
    after () {
      chalkAnimation.rainbow(`Its Wednesday my dudes! http://${HOST}:${PORT}\n`, 0.3)
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [path.resolve(paths.appSrc, 'styles')],
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/, // add ts and tsx
        include: path.resolve(paths.appSrc),
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
}
