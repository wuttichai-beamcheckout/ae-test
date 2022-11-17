describe('api', () => {
  it('test todos', () => {
    cy.request(`${Cypress.env('api')}/todos/1`).as('results')
    cy.get('@results').should((response) => {
      /* @ts-ignore */
      expect(response.status).to.eq(200)
      /* @ts-ignore */
      expect(response.body).to.have.property('userId', 1)
    })
  })
})
