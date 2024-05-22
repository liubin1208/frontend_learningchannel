const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
if (process.env.NODE_ENV === 'production') {
  let aPlugin = new BundleAnalyzerPlugin();
  if (process.env.VUE_CLI_MODERN_MODE) {
    aPlugin = new BundleAnalyzerPlugin({
      analyzerPort: 8889,
    });
  }
  module.exports = {
    devtool: 'none',
    plugins: [aPlugin],
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      axios: 'axios',
    },
  };
} else {
  module.exports = {};
}
