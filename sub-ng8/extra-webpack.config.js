// const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

// module.exports = (angularWebpackConfig, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

//   // Feel free to modify this webpack config however you'd like to
//   return singleSpaWebpackConfig
// }

const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');
const { name } = require('./package');

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  const singleSpaConfig = {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
    },
    externals: {
      'zone.js': 'Zone',
    },
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
};
