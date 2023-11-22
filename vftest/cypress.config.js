const { defineConfig } = require("cypress");
const {createBundler}= require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin }=require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin}=require("@badeball/cypress-cucumber-preprocessor/esbuild");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: ["**/*.feature"],
          // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
          preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      // implement node event listeners here
      // `on` is used to hook into various events Cypress emits
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
      return config;
    },
  },
});
