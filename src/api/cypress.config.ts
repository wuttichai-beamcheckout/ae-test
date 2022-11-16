const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    environment: 'dev',
    api: 'https://jsonplaceholder.typicode.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
