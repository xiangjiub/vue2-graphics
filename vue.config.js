const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          components: "@/components",
          content: "@/components/content",
          common: "@/components/common",
          assets: "@/assets",
          network: "@/network",
          views: "@/views",
          '@': resolve('src')
        },
      },
    },
  };
  