class BuildTimeWebpackPlugin {
  apply(compiler) {
    const doneFn = (stats) => {
      console.log(`本次打包时间为：${stats.endTime - stats.startTime}ms`)
    }
    if (compiler.hooks) {
      const plugin = { name: 'BuildTimeWebpackPlugin' }
      compiler.hooks.done.tap(plugin, doneFn)
    } else {
      compiler.plugin('done', doneFn)
    }
  }
}
module.exports = BuildTimeWebpackPlugin
