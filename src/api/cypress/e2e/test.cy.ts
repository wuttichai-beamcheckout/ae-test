import { TAG } from '../types'

describe('test failed', () => {
  it('test todos', () => {
    cy.api(`${Cypress.env('api')}/todos/1`).as('results')
    cy.get('@results').should((response) => {
      // @ts-ignore
      expect(response.status).to.eq(200)
      // @ts-ignore
      expect(response.body).to.have.property('userId', 2)
    })
  })
})
