describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to My Project')
  })
})

// Add more tests based on your app behavior
