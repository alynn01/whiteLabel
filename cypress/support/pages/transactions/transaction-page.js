export class TransactionPage{
    transactionMenuItem = () => cy.get('.app-onboarding-menu-transactions > .nav-icon > .nav-text').contains('Transactions');
    transactionPageMessage = () => cy.get('.sub-title').contains('View all transactions on your card/wallet');
    currency = () => cy.get(':nth-child(4) > :nth-child(2) > .table-content').contains('USD')
    viewTransactionDetails = () => cy.get(':nth-child(8) > :nth-child(2) > .table-content').contains('More details');
    transactionStatusMessage = () => cy.get('.transaction-status-wrapper').contains('Transaction was successful')


    


    accessTransactionPage(){
        this.transactionMenuItem().click({force : true})
        this.transactionPageMessage().should('be.visible')
        this.currency().should('be.visible')
    }

    accessTransactionDetails(){
        this.viewTransactionDetails().click({force : true})
        this.transactionStatusMessage().should('be.visible')
    }
}