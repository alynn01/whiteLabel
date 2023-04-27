const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 80000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  projectId: "cfxgxe",
  retries: {
    runMode: 2,
    openMode: 0,
  },
  
  env: {
    MAILOSAUR_API_KEY: "{API KEY}",
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
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