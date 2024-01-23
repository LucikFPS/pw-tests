import { test, expect } from '@playwright/test';
import { LuckyLinkHomePage } from '../page-object/luckyLinkHomePage';
import { LuckyLinkItemPage } from '../page-object/luckyLinkItemPage';
import { LuckyLinkCartPage } from '../page-object/luckyLinkCartPage';

test('The user can go to luckylink home page', async ({ page }) => {
    const luckyLinkHomePage = new LuckyLinkHomePage(page);
    await luckyLinkHomePage.goto();

    await expect(page.locator("xpath=//span[@class='btn-content' and text()='Надіслати']")).toHaveText('Надіслати');
  });

test('The user can open find any item and open it', async ({ page }) => {
    const luckyLinkHomePage = new LuckyLinkHomePage(page);
    const luckyLinkItemPage = new LuckyLinkItemPage(page);
    await luckyLinkHomePage.goto();

    await luckyLinkHomePage.getSearchField.click();
    await luckyLinkHomePage.getSearchTextInput.pressSequentially('Samsung 970 Evo');
    await page.locator("xpath=//div[@class='multi-content multi-withLabel']//a[@href='https://luckylink.kiev.ua/ua/samsung-970-evo-plus-2-tb-mz-v7s2t0bw/']").click();
    await expect(luckyLinkItemPage.getItemName).toHaveText('SSD накопичувач Samsung 970 EVO Plus 2 TB (MZ-V7S2T0BW)');
    await expect(luckyLinkItemPage.getBuyButton).toBeVisible();
});

test('The user can switch between Delivery/Payment/Guarantee tabs on item page', async ({ page }) => {
    const luckyLinkItempage = new LuckyLinkItemPage(page);
    await luckyLinkItempage.goto();

    await luckyLinkItempage.getPaymentTab.click();
    await luckyLinkItempage.getGuaranteeTab.click();
    await luckyLinkItempage.getDeliveryTab.click();

  });

test('The user can check the reviews, see its amount and write an answer to any comment', async ({ page }) => {
    const luckyLinkItempage = new LuckyLinkItemPage(page);
    await luckyLinkItempage.goto();
  
    await luckyLinkItempage.getComments.click();
    await expect(luckyLinkItempage.getCommentsCount).toHaveText("3");
    await luckyLinkItempage.getReplyToCommentButton.click();
    await luckyLinkItempage.getReplyNameSurnameField.pressSequentially("Олег The Tester");
    await luckyLinkItempage.getReplyEmailField.pressSequentially("test@testmail.fortest.gg");
    await luckyLinkItempage.getReplyCommentField.pressSequentially("Валик, Валюша, дуже довга.");
}); 

test('The user can add the add to the cart and then to delete it from there and accept JS pop-up', async ({ page }) => {
    const luckyLinkItempage = new LuckyLinkItemPage(page);
    await luckyLinkItempage.goto();
  
    await luckyLinkItempage.getBuyButton.click();
    page.on('dialog', dialog => {
        dialog.accept();
      });
    await page.locator("xpath=//button[@class='counter-btn __minus j-decrease-p']").click();
});

test('The user can create an order to buy an item', async ({ page }) => {
    const luckyLinkItempage = new LuckyLinkItemPage(page);
    await luckyLinkItempage.goto();
    const luckylinkCartPage = new LuckyLinkCartPage(page);
  
    await luckyLinkItempage.getBuyButton.click();
    await luckyLinkItempage.getMakeAnOrderButton.click();
    await luckylinkCartPage.getNameAndSurnameField.pressSequentially("Олег The Testerovskiy");
    await luckylinkCartPage.getPhoneNumberField.pressSequentially("681232323");
    await luckylinkCartPage.getCityField.click();
    await luckylinkCartPage.getCityField.pressSequentially("Київ");
    await luckylinkCartPage.getEmailField.pressSequentially("testmail@mail.gg");
    //await luckylinkCartPage.getMakeAnOrderButton.click(); не буду робити замовлення
});