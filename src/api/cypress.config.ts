import { defineConfig } from 'cypress'
import { tagify } from 'cypress-tags'

module.exports = defineConfig({
  env: {
    environment: 'dev',
    api: 'https://jsonplaceholder.typicode.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config))
    },
  },
  video: false,
})
