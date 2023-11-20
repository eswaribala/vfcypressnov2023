const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:2000,
    screenshotOnRunFailure:true,
    screenshotsFolder:"./screenshots",
    video:true,
    videosFolder:"./videos",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
