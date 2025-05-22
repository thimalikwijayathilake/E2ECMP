// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { authenticator } from 'otplib';

Cypress.Commands.add('login', (username, password) => {
  cy.visit('');
  cy.get('#user-email').clear('thimali.wijayathilake@atmoz.io');
  cy.get('#user-email').type('thimali.wijayathilake@atmoz.io');
  cy.wait(2000);
  cy.get('#user-password').type('Thima@1990');
  cy.get('#\\:rb\\:').click();
  cy.wait(5000);
  cy.get('.css-fv2zs6 > .MuiTypography-root')
    .should('be.visible')
    .invoke('text')
    .should('equal', 'KPIs Dashboard');
});


Cypress.Commands.add('LoginwithMFA', () => {

  cy.visit('https://test.cmp.atmoztechnology.io/')
  cy.wait(2000)

  cy.get('#user-email').type('thimali.wijayathilake+6767@atmoz.io', { force: true });
  cy.get('#user-password').type('Thima@1990', { force: true });
  cy.get('button[type="submit"]').click({ force: true });

  const secret = 'N5LUCY2DLJKGCRDCKFZGCRRQKJ6US4ZZKAYSC4BZHZJUMVC2NVQQ';
  cy.get('input[name="CODE"]', { timeout: 10000 }).should('be.visible');

  // Step 4: Generate TOTP token using the same secret as your app
  const token = authenticator.generate(secret);

  // Step 5: Enter token and submit
  cy.get('input[name="CODE"]').type(token);
  cy.get('button[type="submit"]').click();

  cy.wait(2000);
  cy.get('.css-fv2zs6 > .MuiTypography-root')
    .should('be.visible')
    .invoke('text')
    .should('equal', 'KPIs Dashboard');
});
