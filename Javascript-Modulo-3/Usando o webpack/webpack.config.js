const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
    hello: './src/hello.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].min.js'
  },
  mode: 'development'
}