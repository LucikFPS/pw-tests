import { expect, type Locator, type Page } from '@playwright/test';

export class WotRegistrationPage {
  readonly page: Page;
  readonly emailRegInput: Locator;
  readonly nicknameRegInput: Locator;
  readonly passRegInput: Locator;
  readonly repPassRegInput: Locator;
  readonly inviteCode: Locator;
  readonly liscenceRegCheckbox: Locator
  readonly notificationsRegCheckbox: Locator;
  readonly continueRegButton: Locator;
  readonly amazonRegSSO: Locator;
  readonly facebookRegSSO: Locator;
  readonly googleRegSSO: Locator;
  readonly twitchRegSSO: Locator;

 
  constructor(page: Page) {
    this.page = page;
    this.emailRegInput = page.locator("xpath=//input[@type='email']");
    this.nicknameRegInput = page.locator("xpath=//input[@id='id_name']");
    this.passRegInput = page.locator("xpath=//input[@id='id_password']");
    this.repPassRegInput = page.locator("xpath=//input[@id='id_re_password']");
    this.inviteCode = page.locator("xpath=//a[@class='b-link-false b-link-false__invite js-link']");
    this.liscenceRegCheckbox = page.locator("xpath=//label[@for='id_eula']");
    this.notificationsRegCheckbox = page.locator("xpath=//label[@for='id_subscr']");
    this.continueRegButton = page.locator("xpath=//button[@type='submit']");
    this.amazonRegSSO = page.locator("xpath=//a[@data-provider-name='Amazon']");
    this.facebookRegSSO = page.locator("xpath=//a[@data-provider-name='Facebook']");
    this.googleRegSSO = page.locator("xpath=//a[@data-provider-name='Google']");
    this.twitchRegSSO = page.locator("xpath=//a[@data-provider-name='Twitch']");
  }

  async goto() {
    await this.page.goto('https://eu.wargaming.net/registration/uk/');
  }

}