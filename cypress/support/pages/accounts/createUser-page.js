export class CreateUserPage {
  emailField = () => cy.get('input[name="email"]');
  passwordField = () => cy.get('input[name="password"]');
  loginButton = () => cy.get(`[class*="button-text"]`).contains("Sign in");
  welcomeMessage = () => cy.get(".sc-hhOBVt > div").contains("Welcome back, ");
  endUserMenuItem = () =>
    cy.get('[href="/dashboard/users"] > span').contains("End users");
  createUserDropdown = () =>
    cy
      .get(
        ":nth-child(2) > .sc-pyfCe > .sc-jrcTuL > .sc-kDvujY > #dropdownchild"
      )
      .contains("Create new user");
  openCreateUserPopup = () =>
    cy.get(".sc-csuSiG > :nth-child(1)").contains("Single user creation");
  firstNameField = () => cy.get('input[name="firstName"]');
  lastNameField = () => cy.get('input[name="lastName"]');
  emailEntryField = () => cy.get('input[name="emailAddress"]');
  seearchNig = () => cy.get('input[id="dropdownchild"]');
  selectNigeria = () => cy.get(".sc-eDWCr").contains("Nigeria");
  phoneNumber = () => cy.get('input[name="phoneNumber"]');
  gender = () => cy.get(".jhLczD > .sc-jrcTuL > .sc-kDvujY > .placeholder");
  male = () => cy.get(".sc-csuSiG > :nth-child(2)").contains("Male");
  selectProgram = () =>
    cy.get(".cwyUru > .sc-jrcTuL > .sc-kDvujY > .placeholder");
  chooseProgram = () =>
    cy.get(".sc-csuSiG > :nth-child(6)").contains("Ama Test");
  createUserButton = () => cy.get(".button-text").contains("Create user");

  accessPOPortal(email, password, url) {
    cy.visit(url);
    this.emailField().type(email);
    this.passwordField().type(password);
    this.loginButton().click({ force: true });
    this.welcomeMessage().should("be.visible");
  }

  accessEndUserPage() {
    this.endUserMenuItem().click();
  }

  createEndUser() {
    this.createUserDropdown().click({ force: true });
    this.openCreateUserPopup().click();
  }

  enterDetails() {
    this.firstNameField().type("Amayindi");
    this.lastNameField().type("Lynn");
    this.emailEntryField().type("hamaz@qa.team");
    this.seearchNig().type("Nigeria");
    this.selectNigeria().click();
    this.phoneNumber().type("9072609472");
    this.gender().click({ force: true });
    this.male().click();
    this.selectProgram().click({ force: true });
    this.chooseProgram().click();
    this.createUserButton().should("be.visible");
  }
}
