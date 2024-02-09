import { expect, type Locator, type Page } from '@playwright/test';
import { text } from 'stream/consumers';

export class WotWikiPage {
  readonly page: Page;
  readonly acceptCookies: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly wowarpTab: Locator;
  readonly wowwarsTab: Locator;
  readonly wotBlitzTab: Locator;
  readonly wotConsoleTab: Locator;
  readonly wotTab: Locator;
  readonly wotDiscussions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookies = page.locator("xpath=//button[@id='onetrust-accept-btn-handler']");
    this.searchInput = page.getByPlaceholder('Search');
    this.searchButton = page.getByRole('button', { name: 'Submit' });
    this.wowarpTab = page.locator("xpath=//span[@title='World of Warplanes']");
    this.wowwarsTab = page.locator("xpath=//span[@title='World of Warships']");
    this.wotBlitzTab = page.locator("xpath=//span[@title='WoT Blitz']");
    this.wotConsoleTab = page.locator("xpath=//span[@title='WoT Console']");
    this.wotTab = page.locator("xpath=//span[@title='World of Tanks']");
    this.wotDiscussions = page.locator("xpath=//li[@id='ca-talk']");
  } 

  async goto() {
    await this.page.goto('https://wiki.wargaming.net/en/World_of_Tanks');
  }
}