import {test, expect} from '@playwright/test';
import {GoogleHomePageDesktop} from "../../../../pageObjects/google/googleHomePage.desktop.ts";

let google: GoogleHomePageDesktop;

test.describe("Google search test", () => {
    test.beforeEach(async ({page}) => {
        google = new GoogleHomePageDesktop(page);
        await google.searchMalfini();
    });
    test('Verify Malfini visible after google search', async () => {
        await google.googleHomePageElement.googleResultMalfiniUrl.waitFor();

        const malfiniUrl = google.googleHomePageElement.googleResultMalfiniUrl;
        await expect(malfiniUrl).toBeVisible();
        await expect(malfiniUrl).toHaveAttribute(
            'href',
            'https://shop.malfini.com/cz/cs'
        );
        const malfiniTitle = google.googleHomePageElement.googleResultMalfiniTitle;
        await expect(malfiniTitle).toBeVisible();
        await expect(malfiniTitle).toHaveText('E-shop');

    });
});