const { defineConfig } = require("cypress");

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
  reporter: "cypress-multi-reporters",
  reporterOptions: {
      reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
      cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "My Test Suite",
      embeddedScreenshots: true,
      inlineAssets: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml"
    }
  },
  video: false,

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