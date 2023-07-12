export class AccountPage{
    accountMenuItem = () => cy.get('.app-onboarding-menu-accounts > .nav-icon').contains('Accounts');
    accountsPageMessage = () => cy.get('.sub-title').contains('New day, new opportunities');
    accountBalance = () => cy.get('[class="wallet-balance-header"]').contains('Balances')


    accessAccountsPage(){
        // this.accountMenuItem().click({force : true});
        this.accountsPageMessage().should('be.visible');
        this.accountBalance().should('be.visible')
    }
}