import { expect, type Locator, type Page } from '@playwright/test';

export class WotMainPage {
  readonly page: Page;
  readonly aboutTheGameButton: Locator;
  readonly downloadTheGameButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.aboutTheGameButton = page.locator("xpath=//a[@class='sub-button sub-button__huge promo-fullscreen_action js-promo-fullscreen-more']");
    this.downloadTheGameButton = page.locator("xpath=//span[@class='big-button_text big-button_text__huge']");
  }

  async goto() {
    await this.page.goto('https://worldoftanks.eu/');
  }

}