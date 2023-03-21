import { getProgramOwner } from "../../fixtures/index.js";
import { CreateUserPage, FundProgramUserPage} from "../../support/pages/index";


const newUserPage = new CreateUserPage();
const fundProgram = new FundProgramUserPage()
const programOwner = getProgramOwner();

describe('Fund Program', () => {

    beforeEach(() => {
      newUserPage.accessPOPortal(programOwner.email, programOwner.password, programOwner.url);
    });

    it('Test that user is able to navigate to fund program popup', () => {
        fundProgram.accessFundProgramPage();
        fundProgram.enterFundDetails();
    })
})