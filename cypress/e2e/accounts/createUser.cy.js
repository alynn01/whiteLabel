import { getProgramOwner } from "../../fixtures/index.js";
import { CreateUserPage } from "../../support/pages/index";


const newUserPage = new CreateUserPage();
const programOwner = getProgramOwner();

describe('Create User', () => {

    beforeEach(() => {
      newUserPage.accessPOPortal(programOwner.email, programOwner.password);
    });

    it('Test that user is able to invite a new user to the organization', () => {
        newUserPage.accessEndUserPage();
        newUserPage.createEndUser();
        newUserPage.enterDetails();
    })
})