const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [new BundleAnalyzerPlugin()],
  };
} else {
  module.exports = {};
}
