const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true,
  e2e: {
    baseUrl: 'https://test.cmp.atmoztechnology.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    
  },
});
