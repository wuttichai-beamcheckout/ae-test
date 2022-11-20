import { defineConfig } from 'cypress'
import { tagify } from 'cypress-tags'
// import allureWriter from '@shelex/cypress-allure-plugin/writer'

// import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib'

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

      // on('before:run', async (details) => {
      //   await beforeRunHook(details)
      // })

      // on('after:run', async (results) => {
      //   console.log('---------')
      //   console.log(results)
      //   console.log('---------')
      //   await afterRunHook()
      // })

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
  viewportHeight: process.env.MOBILE ? 667 : 800,
  viewportWidth: process.env.MOBILE ? 375 : 1280,
  // reporter: '../../node_modules/mochawesome',
  // reporterOptions: {
  //   overwrite: false,
  //   html: false,
  //   json: true,
  //   reportDir: 'results',
  // },
})
