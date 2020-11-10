// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  outputDir: process.env.outputDir,

  configureWebpack: {
    resolve: {
      extensions: ['.js', '.css', '.vue'],
      alias: {
        "assets": "@/assets",
        "components": "@/components",
        "utils": "@/utils",
        "views": "@/views",
      }
    },
     
  },
  chainWebpack:(config)=> {
      if(process.env.NODE_ENV !== 'development'){//去除console
        config.optimization.minimizer('terser').tap(options => {
          // 注释console.*
          options[0].terserOptions.compress.drop_console = true
          // remove debugger
          options[0].terserOptions.compress.drop_debugger = true
          // 移除 console.log
          options[0].terserOptions.compress.pure_funcs = ['console.log']
          return options
        })
      }
      
    // }

  },

  devServer: {
    proxy: {
      // 代理的http://zhibo.yl1001.com/webservice/live_video/index.jsp/v1/sys/live/list
      '/proxyApi': {

        target: 'https://zhibo.yl1001.com/webservice/live_video/index.jsp/v1/',
        // target:'https://wqrc.yl1001.com/wachat/',
        timeout: 60000,
        changeOrigin: true,
        pathRewrite: {
          '^/proxyApi': ''
        }

      },
      '/proxyWx': {

        target: 'https://m.yl1001.com/community/web/v1/index.php',
        // target:'https://wqrc.yl1001.com/wachat/',
        timeout: 60000,
        changeOrigin: true,
        pathRewrite: {
          '^/proxyWx': ''
        }

      },
    }

  }

}