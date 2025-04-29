import {test, expect} from '@playwright/test';
import {HomePageDesktop} from "../../../pageObjects/mafiniEshop/homePage.desktop.js";
import {viewports} from "../../../helpers/viewports.ts";

let homePage: HomePageDesktop;

for (const vp of viewports) {
    test.describe(`${vp.name} (${vp.width}×${vp.height})`, () => {
        test.use({viewport: {width: vp.width, height: vp.height}});
        test.beforeEach(async ({page}) => {
            homePage = new HomePageDesktop(page);
            await homePage.navigate();
        });
        test(`Verify visible header top element. ${vp.name}`, async () => {
            await expect(homePage.malfiniHomePageElement.headerTopElement).toBeVisible();
        });
    });
}