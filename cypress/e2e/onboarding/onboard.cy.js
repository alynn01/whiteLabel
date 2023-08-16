import { getProgramOwner } from "../../fixtures/index.js";
import { OnboardPage } from "../../support/pages/index";

const onboard = new OnboardPage();
const programOwner = getProgramOwner();
let newPassword = "Test@123";

describe("Create User", () => {
  beforeEach(() => {
    cy.visit(programOwner.url);
  });

  it("Test that the program admin is able to invite a user to the platform", () => {
    onboard.accessPOPortal(programOwner.email, programOwner.password);
    onboard.accessEndUserPage();
    onboard.createEndUser();
    onboard.inviteNewUserWithCleanAMLRecord();

    onboard.getInvitationLink().then((invitationLink) => {
      cy.get('span:contains("Logout")').click();
      cy.visit(invitationLink, { timeout: 80000 });
      cy.reload();
    });

    onboard.getDefaultPassword().then((htmlBody) => {
      const saveHTMLToFile = (filename, content) => {
        cy.writeFile(`cypress/fixtures/${filename}`, content);
      };

      // Usage: Call the function with the desired filename and the HTML code
      const filename = "my-page.html";
      saveHTMLToFile(filename, htmlBody);

      cy.fixture(filename).then((htmlContent) => {
        cy.get(htmlContent).then((elements) => {
          const spanElement = elements.find(
            `span[data-test="default-password"]`
          );
          const spanContent = spanElement.text().trim();
          cy.log("Content of the span element:", spanContent);
          // For example, you can assert the text content of the element
          expect(spanContent);

          onboard.acceptTerms();
          cy.get('input[type="password"]').type(spanContent);
          cy.get(".button-text").contains("Login").click();
          cy.wait(5000);
          cy.get('button[id="onesignal-slidedown-cancel-button"]')
            .should("contain", "Later")
            .click();
        });

        onboard.getVerificationOTP().then((receivedOTP) => {
          const number = receivedOTP;
          const digitsArray = Array.from(String(number), Number);
          cy.get(":nth-child(1) > .formInputWrapper > .formInput").type(
            digitsArray[0]
          );
          cy.get(":nth-child(2) > .formInputWrapper > .formInput").type(
            digitsArray[1]
          );
          cy.get(":nth-child(3) > .formInputWrapper > .formInput").type(
            digitsArray[2]
          );
          cy.get(":nth-child(4) > .formInputWrapper > .formInput").type(
            digitsArray[3]
          );
          cy.get(":nth-child(5) > .formInputWrapper > .formInput").type(
            digitsArray[4]
          );
          cy.get(".button-text").contains(" Confirm OTP ").click();
        });

        onboard.changePassword(newPassword);
        onboard.newUserLogsIn(newPassword);
        onboard.startKYCProcess();
        onboard.enterAddress();
        onboard.fillIdentityInformation();
        onboard.uploadValidFile();
        onboard.takeSelfie();
      });
    });
  });
});
