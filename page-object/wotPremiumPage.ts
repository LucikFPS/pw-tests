import { expect, type Locator, type Page } from '@playwright/test';

export class WotPremiumPage {
  readonly page: Page;
  readonly featuredTab: Locator;
  readonly goldTab: Locator;
  readonly premiumTab: Locator;
  readonly vehiclesTab: Locator;


  constructor(page: Page) {
    this.page = page;
    this.featuredTab = page.getByRole('link', { name: 'Featured' });
    this.goldTab = page.locator("xpath=//a[@class='category-menu_link' and text()=' Gold ']");
    this.premiumTab = page.locator("xpath=//a[@class='category-menu_link' and text()=' Premium Account ']");
    this.vehiclesTab = page.locator("xpath=//a[@class='category-menu_link' and text()=' Vehicles ']");
  }

  async goto() {
    await this.page.goto('https://eu.wargaming.net/shop/wot/main');
  }

}