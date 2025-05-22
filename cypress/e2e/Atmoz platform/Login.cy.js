/// <reference types="cypress" />

import { authenticator } from 'otplib';

describe('Login Flow', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    //cy.login();

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('verify Login with MFA', function () {

    cy.visit('https://test.cmp.atmoztechnology.io/')
    cy.wait(2000)

    //cy.get('[data-testid="user-email-label"]').should('be.visible');
    //cy.get('[data-testid="user-password-label"]').should('be.visible');
    //cy.get('#user-email').clear('thimali.wijayathilake+6767@atmoz.io');
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

  xit('verify loading Companies', function () {
    cy.wait(100);
    cy.get(':nth-child(2) > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click({ force: true });

  })

  xit('verify loading Users', function () {
    cy.wait(100);
    cy.get(':nth-child(2) > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click({ force: true });

  })

  xit('verify loading Suppliers', function () {
    cy.wait(100);
    cy.get(':nth-child(2) > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click({ force: true });

  })

  xit('verify loading Partners', function () {
    cy.wait(100);
    cy.get(':nth-child(2) > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click({ force: true });

  })
})
