import {test, expect} from '@playwright/test';
import {HomePageDesktop} from "../../../pageObjects/mafiniEshop/homePage.desktop.js";
import {ProductPageDesktop} from "../../../pageObjects/mafiniEshop/productPage.desktop.js";
import {GoogleHomePageDesktop} from "../../../pageObjects/google/googleHomePage.desktop.js";

let homePage: HomePageDesktop;
let productPage: ProductPageDesktop;

test.describe("5. parallel test", () => {
    test.beforeEach(async ({page}) => {
        homePage = new HomePageDesktop(page);
        productPage = new ProductPageDesktop(page);

        await homePage.navigate();
        await homePage.typeSearchButton('vertex');
    });
    test('Verify product page after search navigate', async () => {
        const selectedName = await homePage.clickSearchDropdownByIndex(0);
        const fullTitle = await productPage.formatSearchedTitle(productPage);
        expect(fullTitle).toContain(selectedName);
        expect(await productPage.getSize()).toMatch(/^\d{2}-\d{2}$/); // verify format like 44-62
    });
});