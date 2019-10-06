const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  mode: 'development',
  devServer: {
    overlay: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
    contentBase: './dist',
    // proxy: {
    //   '/react/api': {
    //     target: 'http://www.dell-lee.com',
    //     secure: false, // https配置
    //     pathRewrite: {
    //       'header.json': 'demo.json',
    //     },
    //     changeOrigin: true,
    //     headers: {
    //       host: 'www.abc.com',
    //       cookie: 'aaa', // 请求转发时，模拟登陆、健全的场景
    //     },
    //     // 拦截
    //     bypass (req, res, proxyOptions) {
    //       console.log(res, proxyOptions)
    //       if (req.headers.accept.indexOf('html') !== -1) {
    //         console.log('Skipping proxy for browser request.');
    //         return '/app.html';
    //       }
    //     },
    //   },
    // }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
}

module.exports = webpackMerge(baseConfig, devConfig);