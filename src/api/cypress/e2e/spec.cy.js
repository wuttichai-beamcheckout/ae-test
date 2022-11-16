describe('api', () => {
  it('test todos', () => {
    cy.request(`${Cypress.env('api')}/todos/1`).as('results')
    cy.get('@results').should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('userId', 1)
    })
    cy.wait(10000)
  })
})
