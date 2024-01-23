import { expect, type Locator, type Page } from '@playwright/test';

export class LuckyLinkHomePage {
  readonly page: Page;
  readonly getSearchField: Locator;
  readonly getSearchTextInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getSearchField = page.locator("xpath=//input[@class='search__input']");
    this.getSearchTextInput = page.locator("xpath=//input[@class='multi-input']");
  }

  async goto() {
    await this.page.goto('https://luckylink.kiev.ua/ua/');
  }

}