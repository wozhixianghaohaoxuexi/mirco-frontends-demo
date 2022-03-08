const path = require("path");
module.exports = {
  devServer: {
    // 监听端口
    port: 3000,
    // 关闭主机检查，使微应用可以被 fetch
    // disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      library: 'mircoVue3',
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: 'webpackJsonp_mircoVue3',
    },
  },
};