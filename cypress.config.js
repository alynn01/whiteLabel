const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  env: {
    MAILOSAUR_API_KEY: "{API KEY}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-terminal-report/src/installLogsPrinter")(on);

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      const baseUrl =
        config.env.APP_ENV === "production"
          ? "https://cardholder.essolo.com/"
          : "https://devcardholder.essolo.com/";

      config.baseUrl = baseUrl;

      return config;
    },
  },
});