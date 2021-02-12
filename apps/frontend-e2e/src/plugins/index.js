// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { getWebpackConfig } = require('@nrwl/cypress/plugins/preprocessor');
const webpack = require('@cypress/webpack-preprocessor');

const featureConfig = {
  test: /\.feature$/,
  use: [
    {
      loader: 'cypress-cucumber-preprocessor/loader',
    },
  ],
};

const featuresConfig = {
  test: /\.features$/,
  use: [
    {
      loader: 'cypress-cucumber-preprocessor/lib/featuresLoader',
    },
  ],
};

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-dev-shm-usage');
    }

    return launchOptions;
  });

  const webpackConfig = getWebpackConfig(config);
  webpackConfig.node = {
    fs: 'empty',
    child_process: 'empty',
    readline: 'empty',
  };
  webpackConfig.module.rules.push(featureConfig);
  webpackConfig.module.rules.push(featuresConfig);

  const options = {
    webpackOptions: webpackConfig,
  };
  on('file:preprocessor', webpack(options));
};
