import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,

  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

export default defineConfig({
  env: {
    URL: process.env.URL ?? 'https://www.duckduckgo.com',
    TAGS: process.env.TAGS,
  },
  e2e: {
    specPattern: '**/*.feature',
    supportFile: false,
    setupNodeEvents,
  },
  video: false,
  viewportWidth: process.env.DEVICE === 'mobile' ? 375 : 1280,
  viewportHeight: process.env.DEVICE === 'mobile' ? 667 : 800,
})
