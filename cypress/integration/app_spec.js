/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('Youtube', () => {
  beforeEach(() => {
    cy.intercept('GET', /(mostPopular)/g, {
      fixture: 'dummyMostPopular.json',
    }).as('getMostPopular');
    cy.visit('/');
  });

  it('renders', () => {
    cy.findByText('Youtube').should('exist');
  });

  it('display most popular videos', () => {
    cy.findByText('Test Data: World’s Most Dangerous Escape Room!').should('exist');
  });
});
