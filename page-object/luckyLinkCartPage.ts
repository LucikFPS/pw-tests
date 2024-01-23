import { expect, type Locator, type Page } from '@playwright/test';

export class LuckyLinkCartPage {
  readonly page: Page;
  readonly getNameAndSurnameField: Locator;
  readonly getPhoneNumberField: Locator;
  readonly getCityField: Locator;
  readonly getEmailField: Locator;
  readonly getMakeAnOrderButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.getNameAndSurnameField = page.locator("xpath=//input[@name='Recipient[delivery_name]']");
    this.getPhoneNumberField = page.locator("xpath=//form[@action='/ua/order/submit/']//input[@class='field j-phone j-phone-masked']");
    this.getCityField = page.locator("xpath=//input[@class='field j-ignore ui-autocomplete-input']");
    this.getEmailField = page.locator("xpath=//section[@class='checkout-step j-component']//input[@type='email']");
    this.getMakeAnOrderButton = page.locator("xpath=//form[@action='/ua/order/submit/']//input[@value='Оформити замовлення']");
  }

  async goto() {
    await this.page.goto('https://luckylink.kiev.ua/ua/checkout/');
  }

}