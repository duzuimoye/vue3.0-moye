const externals = {
  // axios: {
  //   root: 'axios',
  //   js: 'https://asset.imuge.net/vue-housekeeper/static/js/axios.min@0.18.0.js',
  //   version: '0.18.0'
  // },
  vue: {
    root: 'Vue',
    js: 'https://asset.imuge.net/vue-housekeeper/static/js/vue.min@2.6.10.js',
    version: '2.6.10'
  },
  'vue-router': {
    root: 'VueRouter',
    js: 'https://asset.imuge.net/vue-housekeeper/static/js/vue-router.min@3.0.3.js',
    version: '3.0.3'
  },
  vuex: {
    root: 'Vuex',
    js: 'https://asset.imuge.net/vue-housekeeper/static/js/vuex.min@3.0.1.js',
    version: '3.0.1'
  },
  'vue-lazyload': {
    root: 'VueLazyload',
    js: 'https://asset.imuge.net/vue-housekeeper/static/js/vue-lazyload@1.2.6.js',
    version: '1.2.6'
  },
  'better-scroll': {
    root: 'BScroll',
    js: 'https://asset.imuge.net/vue-housekeeper/static/js/bscroll.min@1.15.2.js',
    version: '1.2.6'
  },
  fastclick: {
    root: 'FastClick',
    js: 'https://asset.imuge.net/vue-housekeeper/static/js/fastclick.min@1.0.6.js',
    version: '1.2.6'
  },
  dayjs: {
    root: 'dayjs',
    js: 'https://asset.imuge.net/vue-housekeeper/static/js/dayjs.min@1.18.0.js',
    version: '1.2.6'
  }
}

/**
 * 获得外部扩展配置
 * @returns
 */
function getExternalsRoots() {
  let ROOTS = {}
  for (let item in externals) {
    ROOTS[item] = externals[item].root
  }
  return ROOTS
}

/**
 * 获得外部扩展Js
 * @returns
 */
function getExternalsJS() {
  let JS = []
  for (let item in externals) {
    externals[item].js && JS.push(externals[item].js)
  }
  return JS
}

function checkExternalsVersion() {
  console.error('错误')
}

module.exports = {
  getExternalsRoots,
  getExternalsJS,
  checkExternalsVersion
}
