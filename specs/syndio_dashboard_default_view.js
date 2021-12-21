//import '../cypress/support/commands.js'
/**
 * Tests around equity dashboard default view where you can only see group by function
 **/

describe('Syndio equity dashboard test default view', () => {
 beforeEach(() => {
    cy.clearCookies()
    cy.visit('/')
    cy.parseGroupByPersonData()
  })
  it('Verify buttons and logo!', () => {
      cy.get('[alt="Syndio"]').should('be.visible')
      cy.get('[id="dropdown-button"]').should('be.visible')
      cy.contains('Gender')
      cy.contains('Race')
      cy.get('[id="tab-gender"]').should('be.visible')
      cy.get('[id="tab-race"]').should('be.visible')
  })
   it('Verify Gender related', () => {
       
       cy.get('#tab-gender button').should('have.class', 'tab tab-active')
       cy.get('#payEquityGap p').contains('Women')
       cy.get('#payEquityGap p').contains('Men')
       cy.get('#payEquityGap p strong').contains(Cypress.env('gender_equity_pay'))
       cy.get('#employeeComparison p').contains('Women')
       cy.get('#employeeComparison p strong').contains(Cypress.env('gender_employee_comparison'))
       cy.get('#budget').contains(Cypress.env('gender_budget'))
       cy.get('#tab-race button').should('have.class', 'tab tab-inactive')
   })
   it('Verify Race related', () => {
        cy.get('[id="tab-race"]').click()
        cy.get('#tab-race button').should('have.class','tab tab-active' )
        cy.get('#tab-gender button').should('have.class','tab tab-inactive' )
        cy.get('#payEquityGap p').contains('Hispanics')
        cy.get('#payEquityGap p strong').contains(Cypress.env('race_priority_pay'))
        cy.get('#payEquityGap p').contains('Whites')
        cy.get('#employeeComparison p').contains('Hispanics')
        cy.get('#employeeComparison p strong').contains('race_employee_comparison')
        cy.get('#budget').contains('race_budget')
  })
})


