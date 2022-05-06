// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    host: '192.168.112.1',
    port: '8080',
    /* proxy: {
      '/api': {
        target: 'http://localhost:5005', //需要请求的目标接口
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    } */
  },
  lintOnSave: false
}
