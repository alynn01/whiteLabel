export class CreateProgramPage{
    quickActionDropdown = () => cy.get(`[class*="placeholder"]`).contains("Quick actions");
    createProgramItem = () => cy.get('.sc-csuSiG > :nth-child(1)').contains('Create a new program');
    pageTitle = () => cy.get('.modal-header-content > span').contains('Create a new program');
    programName = () => cy.get('input[name="name"]');
    progDescription = () => cy.get('textarea[name="desc"]');
    currency = () => cy.get('.cYefuM > .sc-jrcTuL > .sc-kDvujY > .placeholder');
    programCountry = () => cy.get('.cwyUru > .sc-jrcTuL > .sc-kDvujY > .control-value');
    region = () => cy.get('.jhLczD > .sc-jrcTuL > .sc-ipEyDJ');
    selectAfrica = () => cy.get('.sc-csuSiG > :nth-child(2)').contains('Africa')
    selectNig = () => cy.get('.sc-csuSiG > :nth-child(2)').contains('Nigeria')
    selectUSD = () => cy.get('.sc-eDWCr').contains('USD')
    createProgramButton = () => cy.get('.button-text').contains('Create program')


    


    accessCreateProgram(){
        this.quickActionDropdown().click({force : true})
        this.createProgramItem().click()
        this.pageTitle().should('be.visible')
    }

    enterProgramDetails(){
      this.programName().type('Test Ama')
      this.region().click({force : true})
      this.selectAfrica().click()
      this.programCountry().type('Nig')
      this.selectNig().click()
      this.currency().click({force : true})
      this.selectUSD().click()
      this.progDescription().type("This is a test program")
      this.createProgramButton().should('be.visible')
      

    }
}