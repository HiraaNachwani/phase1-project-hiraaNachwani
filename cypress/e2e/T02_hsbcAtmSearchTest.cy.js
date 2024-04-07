const { homePage } = require("../pages/HomePage");
const { atmPage } = require("../pages/atmPage");
const { basePage } = require("../pages/basePage");
const { privacyStatementPage } = require("../pages/privateStatementPage");


describe('HSBC ATM Search Test', () => {

    const basePageObject = new basePage();
    const homePageObject = new homePage();
    const atmPageObject = new atmPage();
    const privacyStatementPageObject = new privacyStatementPage();
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

    it('should verify HSBC ATM Search Test Scenario', () => {
        // Use the testData object obtained from the before hook

        // 2. Scroll down to the bottom of the page
        basePageObject.scrollToBottom();

        // 3. Click on Find your nearest branch or ATM link in footer section
        homePageObject.clickFindNearestATM();

        // 4. Validate in new page the URL has String = ‘/ways-to-bank/branches/’
        basePageObject.verifyUrlContainsText(testData.subUrl);

        // 5. Validate Header as Branches & ATM
        atmPageObject.verifyAtmAndBranchHeader();

        // 6. Click on before Branch & ATM Locator button
        atmPageObject.clickBranchAndAtmLocator();

        // 7. Type country name as India
        atmPageObject.searchAtmAndBranch(testData.country);

        // 8. In drop-down option click option India
        atmPageObject.selectTextFromSuggestion(testData.country);


        // 9. Validate ATM Header name is showing as Rajbhavan Road
        atmPageObject.verifyTextFromResult(testData.searchResult);


        // 10. Click on add Show more results button
        atmPageObject.clickShowMoreResult();

        // 11. Check second ATM branch name tooltip as 2 in red color is getting displayed
        atmPageObject.verifyTootTipForResult();


        // 12. Check Instagram in social media option in footer section
        atmPageObject.verifyInstagramOption();

        // 13. Check Facebook in social media option in footer section
        atmPageObject.verifyFacebookOption();

        // 14. Check Twitter in social media option in footer section
        atmPageObject.verifyTwitterOption();

        // 15. Check Youtube in social media option in footer section
        atmPageObject.verifyYoutubeOption();
        // 16. Click on HSBC Logo
        homePageObject.clickLogo();

        // 17. Validate page is navigating to home page by its title
        homePageObject.verifyHomePageTitle(testData.homePageTitle);

        // 18. Scroll down to the bottom
        basePageObject.scrollToBottom();

        // 19. Check and Click on Privacy link
        homePageObject.clickPrivacyStatement();

        // 20. Validate Privacy Statement as Header
        privacyStatementPageObject.verifyPrivacyStatementHeader();
    });
});
