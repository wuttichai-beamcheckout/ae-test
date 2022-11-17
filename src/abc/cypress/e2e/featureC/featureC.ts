import { When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

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

Then('I type data in search bar', (datatable: DataTable) => {
  datatable.hashes().forEach((x) => {
    cy.get('input').first().type(x.email)
  })
})
