module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: [
          'es6.set',
          'es6.symbol',
          'es6.array.iterator',
          'es6.promise',
          'es7.array.includes',
          'es7.promise.finally'
        ]
      }
    ]
  ],
  plugins: [[require('@babel/plugin-proposal-class-properties'), { loose: true }]]
}
