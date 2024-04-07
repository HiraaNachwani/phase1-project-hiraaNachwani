const { homePage } = require("../pages/HomePage");
const { loginPage } = require("../pages/loginPage");


describe('HSBC Login Test', () => {

    const homePageObject = new homePage();
    const loginPageObject = new loginPage();
    let testData; // Declare testData variable

    // Before hook to launch the application and read testData
    before(() => {
        // changing display resolution to access element in fullscreen
        cy.viewport(1920, 1080);

        // Read testData from the fixture file
        cy.fixture('testData.json').then(data => {
            testData = data; // Assign testData to the data read from fixture file

            // 1. Open the application
            homePageObject.launchApplication(testData.url);
        });
    });

    it('should verify HSBC Login Test Scenario', () => {
        // Use the testData object obtained from the before hook

        // 2. Validate HSBC Bank Logo
        homePageObject.verifyLogoExist();

        // 3. Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving and Deposit
        homePageObject.verifyHomePageTitle(testData.homePageTitle);

        // 4. Click on Login button
        homePageObject.clickLogOn();

        // 5. Validate Log On header in Login page
        loginPageObject.verifyLogOnHeader();

        // 6. Check Continue button is available and 
        loginPageObject.verifyContinueButtonIsExist();

        // 7. Also validate initially Continue button is disabled.
        loginPageObject.verifyContinueButtonIsDisabled();

        // 8. Type any random email in the username field
        loginPageObject.setUserName(testData.username);

        // 9. Now check Continue button is Enabled
        loginPageObject.verifyContinueButtonIsEnabled();

        // 10. Validate Remember me check box is not checked by default
        loginPageObject.verifyRememberMeCheckBoxIsUnchecked();

        // 11. Validate there is a question mark tooltip present on the page
        loginPageObject.verifyToolTipIsExist();

        // 12. Click on the tooltip
        loginPageObject.clickToolTip();

        // 13. Now validate the username header in the new pop-up screen
        loginPageObject.verifyUserNameHeaderOnPopUp();

        // 14. Validate there is a Close button in the new pop-up screen
        loginPageObject.verifyPopUpCrossIconIsExist();

        // 15. Click on the close button present in the new pop-up screen
        loginPageObject.clickOnPopUpCrossIcon();
    });
});
