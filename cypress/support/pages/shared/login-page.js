import { sharedData } from "../../../fixtures/index";

export class LoginPage {
  emailField = () =>
  cy.get('input[type="email"]');
  passwordField = () =>
  cy.get('input[type="password"]');
  loginButton = () => cy.get(`[class="button-text"]`).contains("Login");

  accessLoginModal() {
    cy.visit(sharedData.paths.login);
    // cy.get(".formButton").contains("Continue to Access").exist;
    // cy.get(".formButton").contains("Continue to Access").click();
    cy.get(".portal-container_header > :nth-child(2)").contains(
      "Gain access. Change your life."
    );
  }

  clickLogin = () => {
    return this.loginButton().click({ force: true });
  };

  login = (email, password) => {
    this.emailField().type(email);
    this.passwordField().type(password);
    return this.clickLogin();
  };
}
