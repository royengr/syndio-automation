Cypress.Commands.add('parseGroupByPersonData', () => {
  cy.log("Calling group by person api to get data")
  cy.request("https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8").then(
      response => {
       Cypress.env('gender_equity_pay', response.body.data.gender.payEquityGap.data.minority.value);
       Cypress.env('gender_employee_comparison', response.body.data.gender.employeeComparison.data.value)
       Cypress.env('gender_budget', response.body.data.gender.budget.data.value)
       Cypress.env('race_priority_pay', response.body.data.race.payEquityGap.data.minority.value);
       Cypress.env('race_employee_comparison', response.body.data.race.employeeComparison.data.value)
       Cypress.env('race_budget', response.body.data.race.budget.data.value)
      })
  cy.log('Hello world')
});
Cypress.Commands.add('parseGroupByRoleData', () => {
  cy.log("Calling group by role api to get data")
  cy.request("https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a").then(
      response => {
       Cypress.env('gender_equity_pay', response.body.data.gender.payEquityGap.data.minority.value);
       Cypress.env('gender_employee_comparison', response.body.data.gender.employeeComparison.data.value)
       Cypress.env('gender_budget', response.body.data.gender.budget.data.value)
       Cypress.env('race_priority_pay', response.body.data.race.payEquityGap.data.minority.value);
       Cypress.env('race_employee_comparison', response.body.data.race.employeeComparison.data.value)
       Cypress.env('race_budget', response.body.data.race.budget.data.value)
      })
});


