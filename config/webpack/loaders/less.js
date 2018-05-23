module.exports = {
  test: /\.less$/,
  use: [{
    loader: 'vue-style-loader'
  }, {
    loader: 'css-loader', options: {
      sourceMap: true
    }
  }, {
    loader: 'less-loader', options: {
      sourceMap: true
    }
  }]
}
