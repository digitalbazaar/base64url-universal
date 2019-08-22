module.exports = {
  mode: 'production',
  entry: {
    'base64url-universal': './lib/index.js'
  },
  output: {
    filename: '[name].min.js',
    library: 'base64url-universal',
    libraryTarget: 'umd'
  }
};
