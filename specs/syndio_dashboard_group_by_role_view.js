/**
 * Tests around equity dashboard group by role view. It will fail because of the bug in
 dashboard where selecting group by role does not work
 **/

 describe('Syndio equity dashboard test group by role view', () => {
 beforeEach(() => {
    cy.visit('/')
    cy.parseGroupByRoleData()
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
        cy.parseGroupByRoleData()
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


