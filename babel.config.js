// const prodPlugin = []

// // 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn(不生效)
// // if (process.env.NODE_ENV === 'production') {
//   prodPlugin.push('transform-remove-console')
// // }

// module.exports = {

//   plugins: [
//     ...prodPlugin
//   ]
// }

module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};