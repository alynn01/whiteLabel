const serverId = "j0xpwpzx";
const serverDomain = serverId + "@mailosaur.io";
let randomNumber = Math.floor(Math.random() * 10000);
let usersEmail = "signyou" + randomNumber + "." + serverDomain;
const searchCriteria = { sentTo: usersEmail };

export class CreateVirtualCardPage{
    cardMenuItem = () => cy.get('.app-onboarding-menu-cards > .nav-icon').contains('Cards');
    toggleButton = () => cy.get('toggle-icon > .toggle-wrapper');
    createVirtualCardButton = () => cy.get('.page-account-number > .formButton').contains(' Create virtual card ');
    yesContinueButton = () => cy.get('.startDeleteCardButtonWrapper > :nth-child(2)').contains(' Yes, continue ');
    popUpMessage = () => cy.get('.otp-message').contains(' How do you want to receive your OTP? ');
    proceedButton = () => cy.get('.modal-footer-content > .formButton').contains(' Proceed ');


    createCard(){
        this.cardMenuItem().click();
        this.toggleButton().click({force : true})
        this.createVirtualCardButton().click({force : true})
        this.yesContinueButton().click({force : true})
        this.popUpMessage().should('be.visible') 
        this.proceedButton().should('be.visible')  
    }

    getVerificationOTP() {
        const currentDate = new Date();
        const twoMinutesAgo = new Date(currentDate.getTime() - 2 * 60 * 1000);
        const serverId = "bnzgkkfu";
        const searchCriteria = { sentTo: "funduseerr@bnzgkkfu.mailosaur.net" };
        return cy
          .mailosaurGetMessage(serverId, searchCriteria, {
            sentTo: "funduser@bnzgkkfu.mailosaur.net",
            receivedAfter: twoMinutesAgo,
            timeout: 40000,
          })
          .then((email) => {
            expect(email.subject).to.equal("Ujay Enterprises OTP");
            return email.html.codes[0].value;
          });
          
      }

}