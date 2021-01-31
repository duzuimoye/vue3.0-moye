/** 测试环境（dev）反向代理 */
const devProxyConfig = {
  '/dev/beauty': {
    target: 'https://m.51miaoge.net/beauty',
    changeOrigin: true,
    pathRewrite: {
      '^/dev/beauty': ''
    }
  },
  '/dev/purchase': {
    target: 'http://purchase.51miaoge.net/purchase/',
    changeOrigin: true,
    pathRewrite: {
      '^/dev/purchase': ''
    }
  }
}
/** 测试环境（251dev）反向代理 */
const dev251ProxyConfig = {
  '/251dev/beauty': {
    target: 'https://251m.51miaoge.net/beauty',
    changeOrigin: true,
    pathRewrite: {
      '^/251dev/beauty': ''
    }
  },
  '/251dev/purchase': {
    target: 'http://purchase.51miaoge.net/purchase',
    changeOrigin: true,
    pathRewrite: {
      '^/251dev/purchase': ''
    }
  }
}
/** 开发环境（cn）反向代理 */
const cnProxyConfig = {
  '/cn/beauty': {
    target: 'https://m.51miaoge.cn/beauty',
    changeOrigin: true,
    pathRewrite: {
      '^/cn/beauty': ''
    }
  },
  '/cn/purchase': {
    target: 'http://purchase.51miaoge.net/purchase/',
    changeOrigin: true,
    pathRewrite: {
      '^/cn/purchase': ''
    }
  }
}
/** 线上环境（cn）反向代理 */
const proxyConfig = {
  '/purchase': {
    target: 'https://purchase.51miaoge.com/purchase',
    changeOrigin: true,
    pathRewrite: {
      '^/purchase': ''
    }
  },
  '/beauty': {
    target: 'https://m.51yanpu.com/beauty',
    changeOrigin: true,
    pathRewrite: {
      '^/beauty': ''
    }
  }
}
/** 所有环境反向代理 */
module.exports = {
  devProxyConfig,
  dev251ProxyConfig,
  cnProxyConfig,
  proxyConfig,
  allProxyConfig: {
    ...devProxyConfig,
    ...dev251ProxyConfig,
    ...cnProxyConfig,
    ...proxyConfig
  }
}
