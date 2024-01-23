import { expect, type Locator, type Page } from '@playwright/test';

export class LuckyLinkItemPage {
  readonly page: Page;
  readonly getBuyButton: Locator;
  readonly getItemName: Locator;
  readonly getDeliveryTab: Locator;
  readonly getPaymentTab: Locator;
  readonly getGuaranteeTab: Locator;
  readonly getGuaranteeDesc: Locator;
  readonly getComments: Locator;
  readonly getCommentsCount: Locator;
  readonly getReplyToCommentButton: Locator;
  readonly getReplyNameSurnameField: Locator;
  readonly getReplyEmailField: Locator;
  readonly getReplyCommentField: Locator;
  readonly getMakeAnOrderButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.getItemName = page.locator("xpath=//div[@class='product-header']//h1[@class='product-title']");
    this.getBuyButton = page.locator("xpath=//span[@class='btn-content' and text()='Купити']");
    this.getDeliveryTab = page.locator("xpath=//div[@class='product-heading__title' and text()='Доставка']");
    this.getPaymentTab = page.locator("xpath=//div[@class='product-heading__title' and text()='Оплата']");
    this.getGuaranteeTab = page.locator("xpath=//div[@class='product-heading__title' and text()='Гарантія']");
    this.getGuaranteeDesc = page.locator("xpath=//div[@data-content-id='garantіja-4']");
    this.getComments = page.locator("xpath=//div[@id='comments']");
    this.getCommentsCount = page.locator("//span[@class='product-comments-count j-comments-count']");
    this.getReplyToCommentButton = page.locator("xpath=//span[@data-href='/ua/_widget/ajax_comments/renderReplyForm/?reply_to=3069&reply_comment=3069&token=d3e8683601ff3030b26d7ecf2e0f13c1&skin=modern']");
    this.getReplyNameSurnameField = page.locator("xpath=//div[@class='p-review-reply__form-item']//input[@name='form[title]']");
    this.getReplyEmailField = page.locator("xpath=//div[@class='p-review-reply__form-item']//input[@name='form[email]']");
    this.getReplyCommentField = page.locator("xpath=//div[@class='p-review-reply__form-item']//textarea[@class='field __text']");
    this.getMakeAnOrderButton = page.locator("xpath=//span[@class='btn-content' and text()='Оформити замовлення']");
  }

  async goto() {
    await this.page.goto('https://luckylink.kiev.ua/ua/samsung-970-evo-plus-2-tb-mz-v7s2t0bw/');
  }

}