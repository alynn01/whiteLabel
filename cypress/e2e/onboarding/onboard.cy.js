import { getProgramOwner } from "../../fixtures/index.js";
import {OnboardPage} from "../../support/pages/index";

const onboard = new OnboardPage();
const programOwner = getProgramOwner();

describe('Create User', () => {

    beforeEach(() => {
      cy.visit('https://stagingcompanyadmin.essolo.com/');
    });

    it('Test that the program admin is able to invite a user to the platform', () => {
        onboard.accessPOPortal(programOwner.email,programOwner.password);
        onboard.accessEndUserPage();
        onboard.createEndUser();
        onboard.inviteNewUserWithCleanAMLRecord();
        onboard.getInvitationLink().then((invitationLink) => {
          cy.get('span:contains("Logout")').click();
          cy.visit(invitationLink);
        });
       
        onboard.checkOnboardingPageIsVisible();
        onboard.verifyDefaultPasswordRequired();
  
  });
});