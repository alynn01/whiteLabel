import { times } from "lodash";

const serverId = "bbcseikz";
const serverDomain = serverId + "@mailosaur.io";
let randomNumber = Math.floor(Math.random() * 10000);
let usersEmail = "signup" + randomNumber + "." + serverDomain;
const searchCriteria = { sentTo: usersEmail };
let oldPassword;


export class OnboardPage {
  emailField = () => cy.get('input[name="email"]');
  passwordField = () => cy.get('input[name="password"]');
  loginButton = () => cy.get(`[class="button-text"]`).contains("Sign in");
  welcomeMessage = () => cy.contains("Welcome back, ");
  endUserMenuItem = () =>
    cy.get('[href="/dashboard/users"] > span').contains("End Users");
  createUserDropdown = () =>
    cy.get(`[class="button-text"]`).contains("Create new user");
  openCreateUserPopup = () => cy.get('.sc-fIhvWL > :nth-child(1)').contains("Create new user");
  firstNameField = () => cy.get('input[name="firstName"]');
  lastNameField = () => cy.get('input[name="lastName"]');
  emailEntryField = () => cy.get('input[name="emailAddress"]');
  clickIntDropdown = () => cy.get('[class="selected-flag"]');
  searchNigeria = () => cy.get(`[class="search-box"]`);
  phoneNumber = () => cy.get('input[type="tel"]');
  gender = () => cy.get(`[class*="placeholder"]`).contains("Gender");
  middlename = () => cy.get('input[name="middleName"]');
  male = () => cy.contains("Male");
  selectProgram = () =>
    cy.get(`input[placeholder="Select program"]`);
  chooseProgram = () => cy.get('.sc-kMjNwy').contains("Amas Program");
  createUserButton = () => cy.get(`[class="button-text"]`).contains("Create user");
  countryField = () => cy.get(`input[placeholder="Select country"]`);
  calenderField = () => cy.get(`input[placeholder="YYYY-MM-DD"]`);
  clickDefaultYear = () => cy.get(`[class="react-datepicker__year-read-view--selected-year"]`).contains("2007");
  calendarScroll = () => cy.get('.react-datepicker__year-dropdown > :nth-child(13)');
  select1994 = () => cy.get('.react-datepicker__year-dropdown > :nth-child(12)').contains("1994");
  select08 = () => cy.get('.react-datepicker__day--008');
  
 

  accessPOPortal(email, password) {
    this.emailField().type(email);
    this.passwordField().type(password);
    this.loginButton().click({ force: true });
    this.welcomeMessage().should("be.visible");
  }

  accessEndUserPage() {
    this.endUserMenuItem().click({force:true});
  }

  createEndUser() {
    this.createUserDropdown().click({ force: true });
    this.openCreateUserPopup().click({force:true});
  }

  inviteNewUserWithCleanAMLRecord() {
    this.firstNameField().type("Amayindi");
    this.lastNameField().type("Lynn");
    this.emailEntryField().type(usersEmail);
    this.clickIntDropdown().click();
    this.searchNigeria().type("Nigeria");
    cy.contains("Nigeria").click({force:true})
    this.phoneNumber().type("9072609472");
    this.middlename().type("Mohammed")
    this.gender().click({ force: true });
    this.male().click();
    this.selectProgram().type("Amas");
    this.chooseProgram().click();
    this.countryField().type("Nigeria")
    cy.contains('Nigeria').click({force:true});
    this.calenderField().click({force:true});
    this.clickDefaultYear().click({force:true});
    times(8, () => {
      this.calendarScroll().click()});
    this.select1994().click({force:true});
    this.select08().click({force:true})
    this.createUserButton().click();
    cy.contains(`User, Amayindi Lynn has been created successfully. A welcome email with a link has been sent to the user, please follow up and have them fill the information.`).should('be.visible');
    cy.contains('Go back to End users').click();
  }
  getInvitationLink() {
    const date = new Date();

    return cy
      .mailosaurGetMessage(serverId, searchCriteria, {
        sentTo: usersEmail,
        receivedAfter: date.setDate(date.getDate()),
        timeout: 40000,
      })
      .then((email) => {
        expect(email.subject).to.equal("User Account Creation");
   
        return email.html.links[0].href;
      });
      
  }

  
  checkOnboardingPageIsVisible() {
    cy.contains(
      "Choose your default language"
    ).should("be.visible");
    cy.get('.formButton').contains('Continue to Access').click();
    cy.get('.content_terms_condition').scrollIntoView();
    cy.get('[class="btn_first_phase_terms_condition"]').contains('Agree').should('be.disabled');
    cy.get(':nth-child(39)').scrollIntoView();
    cy.get('[class="btn_first_phase_terms_condition_company"]').should('not.be.disabled')
    cy.get('[class="btn_first_phase_terms_condition_company"]').contains('Agree').click();
    cy.contains(
      "Gain access. Change your life"
    ).should("be.visible");
  }


  verifyDefaultPasswordRequired(){
    cy.get(`input[placeholder="Password"]`).type(oldPassword)
    cy.get(`[class=button-text]`).contains('Login').click();
  }

}
