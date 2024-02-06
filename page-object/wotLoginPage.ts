import { expect, type Locator, type Page } from '@playwright/test';

export class WotLoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passInput: Locator;
  readonly logInButton: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly recoverAccount: Locator;
  readonly createAccount: Locator;
  readonly amazonSSO: Locator;
  readonly facebookSSO: Locator;
  readonly googleSSO: Locator;
  readonly microsoftSSO: Locator;
  readonly twitchSSO: Locator;
  readonly steamSSO: Locator;
  readonly epicGamesSSO: Locator;
  readonly langSelector: Locator;
  readonly loginError: Locator;


  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("xpath=//input[@placeholder='Email address']");
    this.passInput = page.locator("xpath=//input[@placeholder='Password']");
    this.logInButton = page.locator("xpath=//button[@type='submit']")
    this.rememberMeCheckbox = page.locator("xpath=//label[@for='id_remember']");
    this.recoverAccount = page.locator("xpath=//a[@class='login-info_link js-login-info-password-reset-link']");
    this.createAccount = page.locator("xpath=//a[@class='login-info_link js-login-info-password-reset-link']");
    this.amazonSSO = page.locator("xpath=//a[@id='js-authentication-external-service_amazon']");
    this.facebookSSO = page.locator("xpath=//a[@id='js-authentication-external-service_facebook']");
    this.googleSSO = page.locator("xpath=//a[@id='js-authentication-external-service_google']");
    this.microsoftSSO = page.locator("xpath=//a[@id='js-authentication-external-service_live']");
    this.twitchSSO = page.locator("xpath=//a[@id='js-authentication-external-service_twitch']");
    this.steamSSO = page.locator("xpath=//a[@id='js-authentication-external-service_steam']");
    this.epicGamesSSO = page.locator("xpath=//a[@id='js-authentication-external-service_egs']");
    this.langSelector = page.locator("xpath=//a[@class='region-change-selector js-region-change-selector']");
    this.loginError = page.locator("xpath=//p[@class='js-form-errors-content']");
  }

  async goto() {
    await this.page.goto('https://eu.wargaming.net/id/signin/');
  }

}