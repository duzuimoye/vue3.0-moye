const path = require('path')
const fs = require('fs')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BuildTimeWebpackPlugin = require('./build/build-time-webpack-plugin.js')
const { getExternalsRoots, getExternalsJS } = require('./externals.config')
const { allProxyConfig } = require('./proxy.config.js')
/**
 * 获得jsconfig.json配置的软路径配置
 * @returns
 */
function getJsConfigAlias() {
  let file = path.join(__dirname, './jsconfig.json')
  let data = fs.readFileSync(file, 'utf-8')
  let myObj = {}
  let itemObj = JSON.parse(data).compilerOptions.paths || {}
  for (let item in itemObj) {
    myObj[item.replace('/*', '')] = path.join(__dirname, itemObj[item][0].replace('/*', ''))
  }
  return myObj
}

let packageJSON = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'))
// const cdnUrl = `https://asset.imuge.net/${packageJSON.upload.prefix}/`
const isDev = process.env.NODE_ENV !== 'production'
const isProd = process.env.npm_config_master
// 注册数据供客户端使用
process.env.VUE_APP_ISPROD = isProd
process.env.VUE_APP_EXTERNALS_JS = JSON.stringify(getExternalsJS())

module.exports = {
  productionSourceMap: false, // 是否开启source map
  indexPath: 'index.html',
  crossorigin: 'anonymous',
  // publicPath: isProd ? `${cdnUrl}V${packageJSON.version}/` : '/',
  publicPath: '/',

  outputDir: isProd ? 'prod' : 'test', // 默认的生产环境构建目录
  parallel: require('os').cpus().length > 1, // 开启多核打包
  // 开发环境端口代理（http-proxy-middleware）
  lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用 eslint-loader
  devServer: {
    open: process.env.WEBPACK_DEVSERVER_OPEN === 'false' ? false : true,
    port: process.env.WEBPACK_DEVSERVER_PORT || 8888,
    overlay: {
      warnings: process.env.WEBPACK_OVERLAY_WARINGS === 'false' ? false : true,
      errors: process.env.WEBPACK_OVERLAY_ERRORS === 'false' ? false : true
    },
    proxy: allProxyConfig
  },
  // css文件
  css: {
    sourceMap: false,
    extract: false, // 不构建单独的css文件
    modules: false
  },
  chainWebpack: (config) => config.output.crossOriginLoading('anonymous'),
  configureWebpack: (config) => {
    config.devtool = 'source-map'
    // 性能
    config.performance = {
      maxEntrypointSize: 500 * 1024,
      maxAssetSize: 400 * 1024
    }
    // 用于项目中快捷路径引用
    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        ...getJsConfigAlias()
      }
    }
    // 分包机制(本地开发部=不使用，防止断网)
    if (!isDev) {
      config.externals = getExternalsRoots()
      let plugins = [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        }),
        new BuildTimeWebpackPlugin()
      ]
      config.plugins = [...config.plugins, ...plugins]
    }
  }
}
