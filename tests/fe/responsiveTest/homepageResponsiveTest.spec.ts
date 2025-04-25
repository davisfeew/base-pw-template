import {test, expect} from '@playwright/test';
import {HomePageDesktop} from "../../../pageObjects/mafiniEshop/homePage.desktop.js";

const viewports = [
    {name: 'Mobile S', width: 375, height: 667},
    {name: 'Mobile L', width: 414, height: 896},
    {name: 'Tablet', width: 768, height: 1024},
    {name: 'Desktop', width: 1920, height: 1080},
];

let homePage: HomePageDesktop;

for (const vp of viewports) {
    test.describe(`${vp.name} (${vp.width}×${vp.height})`, () => {
        test.use({viewport: {width: vp.width, height: vp.height}});
        test.beforeEach(async ({page}) => {
            homePage = new HomePageDesktop(page);
            await homePage.navigate();
        });
        test(`Verify visible header top element. ${vp.name}`, async () => {
            await expect(homePage.malfiniHomePageElement.headerTop).toBeVisible();
        });
    });
}