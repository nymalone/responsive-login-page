/// <reference types="cypress" />

const API_ENDPOINT = 'http://localhost:8888';

context('Login&Logout', () => {
  describe('The user should be able to log in', () => {
    it('Should render the correctly title of the page', () => {
      cy.visit('http://localhost:4000');
      cy.get('title').should('have.text', 'OrgaFarm Store');
    });

    it('Should have login form', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Login');

      cy.get('[data-cy="input-email"]')
        .type('joe@doe.com')
        .should('have.value', 'joe@doe.com');

      cy.get('[data-cy="input-password"]')
        .type('1234joe')
        .should('have.value', '1234joe');

      cy.get('form').submit();

      cy.should(() => {
        expect(localStorage.getItem('@App:user')).to.eq('true')
      })

      cy.location('pathname', { timeout: 10000 }).should('eq', '/success');

      cy.contains("It's really great to see you here!");
    });
  });

  describe('The user should be able to logout', () => {
    it('Should have logout button', () => {
      cy.intercept(`${API_ENDPOINT}/login`, {
        fixture: 'auth/auth.json',
      }).as('auth');
      cy.get('[data-cy="logout-button"]').click();
      cy.visit('http://localhost:4000');
    });
  });

  describe('Unknown user should not be able to log in ', () => {
    it('Should have login form', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Login');

      cy.get('[data-cy="input-email"]')
        .type('nykolle@malone.com')
        .should('have.value', 'nykolle@malone.com');

      cy.get('[data-cy="input-password"]')
        .type('1234')
        .should('have.value', '1234');

      cy.get('form').submit();

      cy.location('pathname', { timeout: 10000 }).should('eq', '/');

      cy.contains('Check your credentials');
    });
  });

  describe('Users should not be able to log in and log out without credentials ', () => {
    it('Should have login form', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Login');

      cy.get('form').submit();

      cy.location('pathname', { timeout: 10000 }).should('eq', '/');

      cy.contains('Email is required');
      cy.contains('Password is required');
    });
  });
});
