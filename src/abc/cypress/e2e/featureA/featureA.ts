import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I visit duckduckgo.com', () => {
  cy.visit(Cypress.env('URL'))
})

Then('I should see a search bar', () => {
  cy.get('input').should(
    'have.attr',
    'placeholder',
    'Search the web without being tracked'
  )
})

Then(/I type (.*) in search bar/, (data: string) => {
  cy.get('input').first().type(data)
})
