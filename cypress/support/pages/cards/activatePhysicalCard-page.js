export class ActivatePhysicalCardPage{
    activatePhysicalCardButton = () => cy.get('.page-account-number > .formButton').contains(' Activate physical card ')
    clientIdentification = () => cy.get(':nth-child(1) > .cardRow > form-input-large > .formInputWrapper');
    lastFourDigits = () => cy.get(':nth-child(2) > .cardRow > form-input-large > .formInputWrapper');
    activateCardButton = () =>
    cy.get(`[class='formButton']`).contains(" Activate physical card ");
    pageTitle = () => cy.get(`[class='cardTitle']`).contains('Activate Physical Card');

    enterCardActivationDetails(userId, lastFourDigits){
        this.activatePhysicalCardButton().click({force : true});
        this.pageTitle().should('be.visible');
        this.clientIdentification().type(userId);
        this.lastFourDigits().type(lastFourDigits);
        cy.wait(2000)
        this.activateCardButton().click({force : true})

    }
}