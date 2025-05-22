/// <reference types="cypress" />

import { authenticator } from 'otplib';

describe('Basic Admin Flow', () => {
  beforeEach(() => {
    cy.LoginwithMFA();
  })

  it('verify loading Companies', function () {
    cy.wait(100);
    cy.contains('a', 'Companies').click({ force: true });
    cy.url().should('eq', 'https://test.cmp.atmoztechnology.io/companies');
    cy.get('.MuiTableContainer-root tbody tr').should('have.length.greaterThan', 0);
    cy.get('.MuiTableContainer-root tbody tr').then((rows) => {
      const rowCount = rows.length;
      cy.log(`Number of table rows: ${rowCount}`);
    });
    cy.get('#typeahead-companies').clear('a');
    cy.get('#typeahead-companies').type('ThimaliAutoDemo');
    cy.get('.MuiTableContainer-root tbody tr').should('contain.text', 'ThimaliAutoDemo');
    cy.wait(10000);
  })

  it('verify loading Users', function () {
    cy.wait(100);
    cy.contains('a', 'Users').click({ force: true });
    cy.url().should('eq', 'https://test.cmp.atmoztechnology.io/users');
    cy.get('.MuiTableContainer-root tbody tr').should('have.length.greaterThan', 0);
    cy.get('.MuiTableContainer-root tbody tr').then((rows) => {
      const rowCount = rows.length;
      cy.log(`Number of table rows: ${rowCount}`);
    });

  })

  it('verify loading Suppliers', function () {
    cy.wait(100);
    cy.contains('a', 'Suppliers').click({ force: true });
    cy.url().should('eq', 'https://test.cmp.atmoztechnology.io/suppliers');
    cy.get('.MuiTableContainer-root tbody tr').should('have.length.greaterThan', 0);
    cy.get('.MuiTableContainer-root tbody tr').then((rows) => {
      const rowCount = rows.length;
      cy.log(`Number of table rows: ${rowCount}`);
    });

  })

  it('verify loading Partners', function () {
    cy.wait(100);
    cy.contains('a', 'Partners').click({ force: true });
    cy.url().should('eq', 'https://test.cmp.atmoztechnology.io/partners');
    cy.get('.MuiTableContainer-root tbody tr').should('have.length.greaterThan', 0);
    cy.get('.MuiTableContainer-root tbody tr').then((rows) => {
      const rowCount = rows.length;
      cy.log(`Number of table rows: ${rowCount}`);
    });
  })
})
