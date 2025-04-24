import {test, expect} from '@playwright/test';
import {GoogleHomePageDesktop} from "../pageObjects/google/googleHomePage.desktop";
import {HomePageDesktop} from "../pageObjects/mafiniEshop/homePage.desktop";
import {ProductPageDesktop} from "../pageObjects/mafiniEshop/productPage.desktop";

let homePage: HomePageDesktop;
let productPage: ProductPageDesktop;

test.describe("Google navigate test", () => {
    test.beforeEach(async ({page}) => {
        const google = new GoogleHomePageDesktop(page);
        homePage = new HomePageDesktop(page);
        productPage = new ProductPageDesktop(page);

        await google.openSearchedMalfiniEshop();
        await homePage.allowCookies();
        await homePage.typeSearchButton('vertex');
    })
    test('Verify product page after search navigate', async () => {
        const selectedName = await homePage.clickSearchDropdownByIndex(0);
        const fullTitle = await productPage.formatSearchedTitle(productPage);
        expect(fullTitle).toContain(selectedName);
        expect(await productPage.getSize()).toMatch(/^\d{2}-\d{2}$/); // verify format like 44-62
    });
});