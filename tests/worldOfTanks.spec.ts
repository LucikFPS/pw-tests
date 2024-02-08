import { test, expect } from '@playwright/test';
import { WotMainPage } from '../page-object/wotMainPage';
import { WotPremiumPage } from '../page-object/wotPremiumPage';
import { WotLoginPage } from '../page-object/wotLoginPage';
import { WotRegistrationPage } from '../page-object/wotRegistrationPage';
import { WotWikiPage } from '../page-object/wotWikiPage';
import exp from 'constants';


test.describe('World of tanks tests', () => {
    test('The user can go the World of tanks home page and proceed to the About the game section', async ({ page }) => {
        const wotMainPage = new WotMainPage (page);
        await wotMainPage.goto();
        
        await expect(await page.url()).toContain("https://worldoftanks.eu/");
        await page.evaluate(() => window.scrollTo(0, 0));
        await wotMainPage.aboutTheGameButton.click();
        await expect(await page.url()).toContain("https://worldoftanks.eu/en/game/");
      });

    test('The can see footer menu and all sections', async ({ page }) => {
        const wotMainPage = new WotMainPage (page);
        await wotMainPage.goto();
        
        await expect(page.locator("xpath=//a[@class='footer-menu_link' and text()='Player Support']")).toHaveText("Player Support");
        await expect(page.locator("xpath=//a[@class='footer-menu_link' and text()='Partners']")).toHaveText("Partners");
        await expect(page.locator("xpath=//a[@class='footer-menu_link' and text()='EULA']")).toHaveText("EULA");
        await expect(page.locator("xpath=//a[@class='footer-menu_link' and text()='Privacy Policy']")).toHaveText("Privacy Policy");
        await expect(page.locator("xpath=//a[@class='footer-menu_link' and text()='Game Rules']")).toHaveText("Game Rules");
        await expect(page.locator("xpath=//a[@class='footer-menu_link' and text()='Parental controls']")).toHaveText("Parental controls");
        await expect(page.locator("xpath=//a[@class='footer-menu_link' and text()='Careers']")).toHaveText("Careers");
    });

    test.use({
        viewport: { width: 1600, height: 1200 },
    });
    test('The user can go premium shop and switch between tabs', async ({ page }) => {
        const wotPremiumPage = new WotPremiumPage (page);
        await wotPremiumPage.goto();
        
        await wotPremiumPage.goldTab.click();
        await expect(page.locator("xpath=//span[text()='Purchase via Online Payment']")).toHaveText("Purchase via Online Payment");
        await wotPremiumPage.premiumTab.click();
        await expect(page.locator("xpath=//span[text()='World of Tanks Premium Account']")).toHaveText("World of Tanks Premium Account");
        await wotPremiumPage.vehiclesTab.click();
        await expect(page.locator("xpath=//span[text()='All nations']").first()).toHaveText("All nations");
        await wotPremiumPage.featuredTab.click();
        await expect(page.locator("xpath=//p[@class='promo-product_title' and text()='WoT Plus']")).toHaveText("WoT Plus");
    });

    test('The user can proceed to the Login page and fill all the required field, and trigger an error', async ({ page }) => {
        const wotLoginPage = new WotLoginPage (page);
        await wotLoginPage.goto();
        
        await wotLoginPage.emailInput.pressSequentially("tester@sneaky.gg");
        await wotLoginPage.passInput.pressSequentially("Pass1234");
        await wotLoginPage.rememberMeCheckbox.check();
        await wotLoginPage.rememberMeCheckbox.isChecked();
        await wotLoginPage.logInButton.click();
        await expect(wotLoginPage.loginError).toBeVisible();

            await test.step('To check redirection to Recover Account', async () => {
                const wotLoginPage = new WotLoginPage (page);
                await wotLoginPage.goto();
            
                await wotLoginPage.recoverAccount.click();
                await expect(await page.url()).toContain("https://eu.wargaming.net/personal/password_reset/");
            });

            await test.step('To check redirection to Create Account page', async () => {
                const wotLoginPage = new WotLoginPage (page);
                await wotLoginPage.goto();
            
                await wotLoginPage.recoverAccount.click();
                await expect(await page.url()).toContain("https://eu.wargaming.net/personal/password_reset/");
            });
    });

    test('To check all SSO visible on Login Page', async ({ page }) => {
        const wotLoginPage = new WotLoginPage (page);
        await wotLoginPage.goto();
        
        await expect(wotLoginPage.amazonSSO).toBeVisible();
        await expect(wotLoginPage.facebookSSO).toBeVisible();
        await expect(wotLoginPage.googleSSO).toBeVisible();
        await expect(wotLoginPage.microsoftSSO).toBeVisible();
        await expect(wotLoginPage.twitchSSO).toBeVisible();
        await expect(wotLoginPage.steamSSO).toBeVisible();
        await expect(wotLoginPage.epicGamesSSO).toBeVisible();
    });

    test('The user can proceed to the Registration page and fill all the required field', async ({ page }) => {
        const wotRegistrationPage = new WotRegistrationPage (page);
        await wotRegistrationPage.goto();
        
        await wotRegistrationPage.emailRegInput.pressSequentially("tester@aqa.test");
        await wotRegistrationPage.nicknameRegInput.pressSequentially("Dat_Tester");
        await wotRegistrationPage.passRegInput.pressSequentially("Pass1234");
        await wotRegistrationPage.repPassRegInput.pressSequentially("Pass1234");
        await expect(wotRegistrationPage.inviteCode).toBeVisible();
        await wotRegistrationPage.liscenceRegCheckbox.check();
        await wotRegistrationPage.notificationsRegCheckbox.check();
    });

    test('To check SSO visible on Registration page', async ({ page }) => {
        const wotRegistrationPage = new WotRegistrationPage (page);
        await wotRegistrationPage.goto();
        
        await expect(wotRegistrationPage.amazonRegSSO).toBeVisible();
        await expect(wotRegistrationPage.facebookRegSSO).toBeVisible();
        await expect(wotRegistrationPage.googleRegSSO).toBeVisible();
        await expect(wotRegistrationPage.twitchRegSSO).toBeVisible();
    });

    test('To check validation for Registration page input fields', async ({ page }) => {
        const wotRegistrationPage = new WotRegistrationPage (page);
        await wotRegistrationPage.goto();
        
        await wotRegistrationPage.emailRegInput.pressSequentially("text");
        await expect(page.locator("xpath=//p[@id='id_login_error']")).toHaveText("Вказано неправильну адресу поштової скриньки. Перевірте правильність вказаної адреси.");
        await wotRegistrationPage.nicknameRegInput.pressSequentially("test");
        await expect(page.locator("xpath=//p[@id='id_name_error']")).toHaveText("Користувач з таким ім’ям вже зареєстрований. Оберіть інше ім’я.");
        await wotRegistrationPage.passRegInput.pressSequentially("pass1234");
        await expect(page.locator("xpath=//p[@id='id_password_error']")).toHaveText("Мінімальна довжина: 8 символів. Ваш пароль повинен містити малі та великі літери, а також цифри.");
        await wotRegistrationPage.repPassRegInput.pressSequentially("1234");
        await expect(page.locator("xpath=//p[@id='id_re_password_error']")).toHaveText("Введені паролі не сходяться.");
    });

    test('The user can to WoT wiki page and find a tank', async ({ page }) => {
        const wotWikiPage = new WotWikiPage (page);
        await wotWikiPage.goto();

        //await wotWikiPage.acceptCookies.click(); for VPN. uncomment if needed
        await page.waitForLoadState();
        await wotWikiPage.searchInput.pressSequentially("T77");
        await wotWikiPage.searchButton.click();
        await page.locator("xpath=//a[@href='//wiki.wargaming.net/ru/Tank:A132_T77']").click();
        await expect(page.locator("xpath=//span[@dir='auto' and text()='T77']")).toHaveText("T77");
    });

    test('The user can switch between different games in the left tab', async ({ page }) => {
        const wotWikiPage = new WotWikiPage (page);
        await wotWikiPage.goto();

        await wotWikiPage.wowarpTab.click();
        await expect(page).toHaveURL("https://wiki.wargaming.net/en/World_of_Warplanes");
        await wotWikiPage.wowwarsTab.click();
        await expect(page).toHaveURL("https://wiki.wargaming.net/en/World_of_Warships");
        await wotWikiPage.wotBlitzTab.click();
        await expect(page).toHaveURL("https://wiki.wargaming.net/en/WoT_Blitz");
        await wotWikiPage.wotConsoleTab.click();
        await expect(page).toHaveURL("https://wiki.wargaming.net/en/WoT_Console");
        await wotWikiPage.wotTab.click();
        await expect(page).toHaveURL("https://wiki.wargaming.net/en/World_of_Tanks");
    });

    test('The user can go to discussion page and go to any contest', async ({ page }) => {
        const wotWikiPage = new WotWikiPage (page);
        await wotWikiPage.goto();

        await wotWikiPage.wotDiscussions.click();
        await expect(page).toHaveTitle("Talk:World of Tanks - Global wiki. Wargaming.net");
        await page.locator("xpath=//span[@class='toctext' and text()='T28 Proto.']").click();
        await expect(page.locator("xpath=//span[@id='T28_Proto.']")).toBeInViewport();
    });
})