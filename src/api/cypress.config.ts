import { defineConfig } from 'cypress'
import { tagify } from 'cypress-tags'
// import allureWriter from '@shelex/cypress-allure-plugin/writer'

export default defineConfig({
  env: {
    environment: 'dev',
    api: 'https://jsonplaceholder.typicode.com',
    CYPRESS_EXCLUDE_TAGS: 'SMOKE',
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config))
      // allureWriter(on, config)

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('cypress-mochawesome-reporter/plugin')(on)

      // // eslint-disable-next-line @typescript-eslint/no-var-requires
      // require('cypress-json-results')({
      //   on,
      //   fileName: 'results.json',
      // })
    },
  },
  video: false,
  reporter: '../../node_modules/cypress-mochawesome-reporter',
  reporterOptions: {
    saveJson: true,
  },
  // reporter: '../../node_modules/mochawesome',
  // reporterOptions: {
  //   overwrite: false,
  //   html: false,
  //   json: true,
  //   reportDir: 'results',
  // },
})
