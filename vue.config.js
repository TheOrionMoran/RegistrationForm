const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/RegistrationForm/',
  configureWebpack: {
    devtool: 'source-map'
  }
})
