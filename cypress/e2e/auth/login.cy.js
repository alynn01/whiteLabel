import { getCardHolder } from "../../fixtures/index.js";
import { LoginPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const cardHolder = getCardHolder();

describe('Login Test', () => {

  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it('Test that user is unable to login with wrong email but correct password', () => {
    loginPage.login('damiuser001@yopmail', cardHolder.password);
    cy.get('.portal-container_header > :nth-child(2)').contains('Gain access. Change your life.').should('be.visible')
  })

  it('Test that user is unable to login with correct email but wrong password', () => {
    loginPage.login(cardHolder.email, 'Password');
    cy.get('.portal-container_header > :nth-child(2)').contains('Gain access. Change your life.').should('be.visible')
  })

  it('Test that user is unable to login without email but correct password', () => {
    cy.get(':nth-child(2) > .column > form-input-large > .formInputWrapper').type(cardHolder.password);
    cy.get('.portal-container_header > :nth-child(2)').contains('Gain access. Change your life.').should('be.visible')
  })

  it('Test that user is unable to login with correct email but no password', () => {
    cy.get(':nth-child(1) > .column > form-input-large > .formInputWrapper').type(cardHolder.email);
    cy.get('.portal-container_header > :nth-child(2)').contains('Gain access. Change your life.').should('be.visible')
  })

  it('Test that user is unable to login without email or password', () => {
    cy.get('.form-button').contains('Login').click();
    cy.get('.portal-container_header > :nth-child(2)').contains('Gain access. Change your life.').should('be.visible')
  })

  it('Test that user is unable to login with valid email and password', () => {
    loginPage.login(cardHolder.email, cardHolder.password);
    cy.get('.onboarding-title').contains('Welcome');
    cy.get('.start').contains('Not interested').click();
    cy.get('.title').contains('Damilare').should('be.visible');
    
  })
})