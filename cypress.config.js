const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://www.amazon.com/",
    specPattern: "**/*.feature",
    viewportHeight: 800,
    viewportWidth: 1280,
    defaultCommandTimeout: 8000,
    reporter: 'mochawesome',
    "reporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": false,
      "html": true,
      "json": false
   }
  },
  integration: {
    setupNodeEvents,
    specPattern: "**/integration/api/*.feature",
    reporter: 'mochawesome',
    "reporterOptions": {
      "reportDir": "cypress/results/",
      "overwrite": true,
      "html": true,
      "json": true
   }
  },
  env: {
    baseUrl: 'https://rickandmortyapi.com/api/'
  },
});