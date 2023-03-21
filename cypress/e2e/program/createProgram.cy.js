import { getProgramOwner } from "../../fixtures/index.js";
import { CreateUserPage, CreateProgramPage } from "../../support/pages/index";


const newUserPage = new CreateUserPage();
const createProgram = new CreateProgramPage()
const programOwner = getProgramOwner();

describe('Create Program', () => {

    beforeEach(() => {
      newUserPage.accessPOPortal(programOwner.email, programOwner.password, programOwner.urlPath);
    });

    it('Test that user is able to navigate to create program popup', () => {
       createProgram.accessCreateProgram();
       createProgram.enterProgramDetails();
    })
})