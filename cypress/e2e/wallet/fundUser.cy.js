import { getProgramOwner } from "../../fixtures/index.js";
import { CreateUserPage, FundUserPage} from "../../support/pages/index";


const newUserPage = new CreateUserPage();
const fundUser = new FundUserPage()
const programOwner = getProgramOwner();

describe('Fund User', () => {

    beforeEach(() => {
      newUserPage.accessPOPortal(programOwner.email, programOwner.password);
    });

    it('Test that user is able to navigate to fund user popup', () => {
        fundUser.accessFundUserPopup();
        fundUser.enterFundDetails();
    })
})