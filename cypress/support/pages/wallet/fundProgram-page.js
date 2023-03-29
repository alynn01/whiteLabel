export class FundProgramUserPage{
    walletMenuItem = () => cy.get('[href="/dashboard/wallet"] > span');
    quickActionDropdown = () => cy.get(`[class*="placeholder"]`).contains("Quick actions");
    fundProgramDropdownItem = () => cy.get('.sc-csuSiG > :nth-child(1)').contains('Fund programs')
    programDropdown = () => cy.get('.control-value');
    selectProgram = () => cy.get('.sc-csuSiG > :nth-child(2)');
    enterAmount = () => cy.get(`input[name="amount"]`);
    fundProgramButton = () => cy.get('.button-text').contains('Fund program')
    popupHeader = () => cy.get('.modal-header-content > span').contains('Fund program accounts')


    accessFundProgramPage(){
        this.walletMenuItem().click()
        this.quickActionDropdown().click({force : true})
        this.fundProgramDropdownItem().click()
        this.popupHeader().should('be.visible')
    }

    enterFundDetails(){
        this.programDropdown().click({force : true})
        this.selectProgram().click()
        this.enterAmount().type('1')
        this.fundProgramButton().should('be.visible')
    }
}