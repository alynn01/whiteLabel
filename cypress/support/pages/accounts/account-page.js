export class AccountPage{
    accountMenuItem = () => cy.get('.app-onboarding-menu-accounts > .nav-icon').contains('Accounts');
    accountsPageMessage = () => cy.get('.sub-title').contains('View your account summary');
    accountBalance = () => cy.get(':nth-child(1) > .auto > :nth-child(1) > .cardRow > .wallet-title').contains(' Account Balance ')


    accessAccountsPage(){
        this.accountMenuItem().click({force : true});
        this.accountsPageMessage().should('be.visible');
        this.accountBalance().should('be.visible')
    }
}