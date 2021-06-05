const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: './',
  indexPath: 'question.html',
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: 8889,
    proxy: {
      '^/': {
        target: 'http://127.0.0.1:9510',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
  }
}
