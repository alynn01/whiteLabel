import { times } from "lodash";

const serverId = "j0xpwpzx";
const serverDomain = serverId + "@mailosaur.io";
let randomNumber = Math.floor(Math.random() * 10000);
let usersEmail = "signyou" + randomNumber + "." + serverDomain;
const searchCriteria = { sentTo: usersEmail };

export class OnboardPage {
  emailField = () => cy.get('input[name="email"]');
  passwordField = () => cy.get('input[name="password"]');
  loginButton = () => cy.get(`[class="button-text"]`).contains("Sign In");
  welcomeMessage = () => cy.contains("Welcome back, ");
  endUserMenuItem = () =>
    cy.get('[href="/dashboard/users"] > span').contains("End Users");
  createUserDropdown = () =>
    cy.get(`[class="button-text"]`).contains("Create New User");
  openCreateUserPopup = () =>
    cy.get(".sc-eYqcxL > :nth-child(1)").contains("Create New User");
  firstNameField = () => cy.get('input[name="firstName"]');
  lastNameField = () => cy.get('input[name="lastName"]');
  emailEntryField = () => cy.get('input[name="emailAddress"]');
  clickIntDropdown = () => cy.get('[class="selected-flag"]');
  searchNigeria = () => cy.get(`[class="search-box"]`);
  phoneNumber = () => cy.get('input[type="tel"]');
  gender = () => cy.get(`[class*="placeholder"]`).contains("Gender");
  middlename = () => cy.get('input[name="middleName"]');
  male = () => cy.contains("Male");
  selectProgram = () => cy.get(`input[placeholder="Select Program"]`);
  chooseProgram = () => cy.get(".sc-kMjNwy").contains("Amas Program");
  createUserButton = () =>
    cy.get(`[class="button-text"]`).contains("Create User");
  countryField = () =>
    cy.get(".sc-eKJbhj > :nth-child(1) > :nth-child(2) > .sc-iJnaPW");
  calenderField = () => cy.get(`input[placeholder="YYYY-MM-DD"]`);
  clickDefaultYear = () =>
    cy
      .get(`[class="react-datepicker__year-read-view--selected-year"]`)
      .contains("2007");
  calendarScroll = () =>
    cy.get(".react-datepicker__year-dropdown > :nth-child(13)");
  select1994 = () =>
  cy.get(':nth-child(1) > .formInputWrapper > .form-input-detail > .form-input > ngx-daterangepicker-material > .md-drppicker > .calendar > .calendar-table > .table-condensed > thead > :nth-child(1) > .month > :nth-child(2) > .yearselect')
      .contains("1994");
  select08 = () => cy.get(".react-datepicker__day--008");
  newPasswordField = () => cy.get(
    ":nth-child(2) > .column > form-input-large > .formInputWrapper > .form-input-detail > .form-input > .formInput"
  );
  confirmPassword = () => cy.get(
    ":nth-child(3) > .column > form-input-large > .formInputWrapper > .form-input-detail > .form-input > .formInput"
  );
  calendarDropdown = () => cy.get(
    ":nth-child(2) > .column > :nth-child(2) > .cardRow > :nth-child(1) > .formInputWrapper > .form-input-detail > .form-input > .formInput"
  );
  selectt1994 = () => cy.get('.react-datepicker__year-dropdown > :nth-child(12)');
  select2027 = () =>  cy.get(
    ":nth-child(2) > .formInputWrapper > .form-input-detail > .form-input > ngx-daterangepicker-material > .md-drppicker > .calendar > .calendar-table > .table-condensed > thead > :nth-child(1) > .month > :nth-child(2) > .yearselect"
  );

  accessPOPortal(email, password) {
    this.emailField().type(email);
    this.passwordField().type(password);
    this.loginButton().click({ force: true });
    this.welcomeMessage().should("be.visible");
  }

  accessEndUserPage() {
    this.endUserMenuItem().click({ force: true });
  }

  createEndUser() {
    this.createUserDropdown().click({ force: true });
    this.openCreateUserPopup().click({ force: true });
  }

  inviteNewUserWithCleanAMLRecord() {
    this.firstNameField().type("Amayindi");
    this.lastNameField().type("Lynn");
    this.emailEntryField().type(usersEmail);
    this.clickIntDropdown().click();
    this.searchNigeria().type("Nigeria");
    cy.contains("Nigeria").click({ force: true });
    this.phoneNumber().type("9072609472");
    this.middlename().type("Mohammed");
    this.gender().click({ force: true });
    this.male().click();
    this.selectProgram().type("Amas");
    this.chooseProgram().click();
    this.countryField().type("Nigeria");
    cy.contains("Nigeria").click({ force: true });
    this.calenderField().click({ force: true });
    this.clickDefaultYear().click({ force: true });
    times(8, () => {
      this.calendarScroll().click();
    });
    this.selectt1994().click({ force: true });
    this.select08().click({ force: true });
    this.createUserButton().click();
    cy.contains(`User, Amayindi Lynn has been created successfully`).should(
      "be.visible"
    );
    cy.contains("Go back to End users").click();
  }

  getInvitationLink() {
    const currentDate = new Date();
    const twoMinutesAgo = new Date(currentDate.getTime() - 2 * 60 * 1000);

    return cy
      .mailosaurGetMessage(serverId, searchCriteria, {
        sentTo: usersEmail,
        receivedAfter: twoMinutesAgo,
        timeout: 40000,
      })
      .then((email) => {
        expect(email.subject).to.equal("User Account Creation");
        return email.html.links[0].href;
      });
  }

  getDefaultPassword() {
    const currentDate = new Date();
    const twoMinutesAgo = new Date(currentDate.getTime() - 2 * 60 * 1000);
    return cy
      .mailosaurGetMessage(serverId, searchCriteria, {
        sentTo: usersEmail,
        receivedAfter: twoMinutesAgo,
        timeout: 40000,
      })
      .then((email) => {
        expect(email.html.body).to.contain("Default password");
        return email.html.body;
      });
  }

  getVerificationOTP() {
    const currentDate = new Date();
    const fourMinutesAgo = new Date(currentDate.getTime() - 4 * 60 * 1000);
    const searchCriteria = { sentTo: usersEmail };
    return cy
      .mailosaurGetMessage(serverId, searchCriteria, {
        sentTo: usersEmail,
        receivedAfter: fourMinutesAgo,
        timeout: 40000,
      })
      .then((email) => {
        expect(email.subject).to.equal("Auto Test OTP");
        return email.html.codes[0].value;
      });
  }

  changePassword(updatedPassword) {
    this.newPasswordField().type(updatedPassword);
    this.confirmPassword().type(updatedPassword);
    cy.get(".button-text").contains("Reset password").click();
    cy.contains("Password Updated Successfully").should("be.visible");
  }

  newUserLogsIn(updatedPassword) {
    cy.get('input[type="email"]').type(usersEmail);
    cy.get('input[type="password"]').type(updatedPassword);
    cy.get(`[class="button-text"]`).contains("Login").click();
    cy.contains("Let’s know you better!").should("be.visible");
  }

  startKYCProcess(){
    cy.get('[class*="formButton"]').contains(` Let’s get started `).click();
    cy.contains(
      "A government-issued ID, such as your national ID, passport, or driver's license"
    ).should("be.visible");
    cy.get('[class*="formButton"]').contains(` Next `).click();
    cy.get('[class*="button-text"]').contains(` Proceed `).click();
  }
  enterAddress(){
    cy.contains("Enter your address").should("be.visible");
    cy.get('input[placeholder="Search your address"]').type("Churchgate Abuja");
    cy.get('google-auto-complete-input > .formInputWrapper > .form-input-detail > .form-input > .formInput').click();
    cy.contains("ChurchGate Tower").click()
    cy.wait(2000)
    cy.get('[class*="button-text"]').contains(` Proceed `).click();
  }

  fillIdentityInformation(){
    cy.contains("Enter your identity information").should("be.visible");
    cy.get('[class*="dropdown-icon"]').click();
    cy.contains("Passport").click();
    cy.wait(3000);
    cy.get('input[placeholder="Identification number*"]').type("AY289Y1");
    this.calendarDropdown().click();
    cy.get(':nth-child(1) > .formInputWrapper > .form-input-detail > .form-input > ngx-daterangepicker-material > .md-drppicker > .calendar > .calendar-table > .table-condensed > thead > :nth-child(1) > .month > :nth-child(2) > .yearselect').select("1994");
    cy.get(
      ":nth-child(1) > .formInputWrapper > .form-input-detail > .form-input > ngx-daterangepicker-material > .md-drppicker > .calendar > .calendar-table > .table-condensed > tbody.drp-animate > :nth-child(3) > :nth-child(4)"
    ).click();
    cy.get(
      ":nth-child(2) > .column > :nth-child(2) > .cardRow > :nth-child(2) > .formInputWrapper > .form-input-detail > .form-input > .formInput"
    ).click();
   this.select2027().select("2027");
    cy.get(
      ":nth-child(2) > .formInputWrapper > .form-input-detail > .form-input > ngx-daterangepicker-material > .md-drppicker > .calendar > .calendar-table > .table-condensed > tbody.drp-animate > :nth-child(3) > :nth-child(4)"
    ).click();
    cy.wait(3000)
    cy.get('[class*="button-text"]').contains(` Proceed `).click();
  }


  uploadInvalidFile(){
    const fileToUpload = "sta.pdf";
    cy.get('.file-upload-input').attachFile(fileToUpload)
  }

  clickSubmitButton(){
    this.submitTicketButton().click();
  }

  uploadValidFile(){
    const fileToUpload = "uploadthis.png";
    cy.get('.file-upload-input').attachFile(fileToUpload)
    cy.wait(5000)
    cy.get('[class="button-text"]').contains(` Proceed `).click({force:true});
  }

  uploadLargeFile(){
    const fileToUpload = "Transactions-history.pdf";
    cy.get('.file-upload-input').attachFile(fileToUpload)
  }

  takeSelfie(){
   // cy.get('[type="inverse"] > .enabled > .button-text').contains("Open Camera").click();
    cy.get(`img[class="actionBtn"]`).click();
    cy.get('[class="button-text"]').contains(` Upload and continue `).click({force:true});
    cy.contains("You have successfully submitted your KYC (Know Your Customer) documentation").should("be.visible")
  }

  acceptTerms(){
    cy.contains("Choose your default language").should("be.visible");
          cy.get(".formButton").contains("Continue to Access").click();
          cy.get(".content_terms_condition").scrollIntoView();
          cy.get('[class="btn_first_phase_terms_condition"]')
            .contains("Agree")
            .should("be.disabled");
          cy.get(":nth-child(39)").scrollIntoView();
          cy.get('[class="btn_first_phase_terms_condition_company"]').should(
            "not.be.disabled"
          );
          cy.get('[class="btn_first_phase_terms_condition_company"]')
            .contains("Agree")
            .click();
          cy.contains("Gain access. Change your life").should("be.visible");
  }
}
