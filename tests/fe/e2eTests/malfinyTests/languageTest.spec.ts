import { expect, test } from '@playwright/test';
import { HomePageDesktop } from '../../../../pageObjects/mafiniEshop/homePage.desktop.ts';
import { getLanguageLabel, LanguageCode } from '../../../../helpers/language.ts';

const languages = Object.values(LanguageCode) as LanguageCode[];

test.describe('Language test', () => {
    for (const language of languages) {
        test(`Verify language change for ${language}`, async ({ page }) => {
            const homePage = new HomePageDesktop(page);
            await homePage.navigate();
            await homePage.selectLanguage(language);

            const htmlLang = homePage.getDOMLanguage(language);
            await expect(htmlLang).toHaveCount(1);
            await expect(htmlLang).toHaveAttribute('lang', language);

            await expect(page).toHaveURL(
                `${process.env.MALFINI_ESHOP_BASE_URL!}${language}/`
            );

            await expect(
                homePage.malfiniHomePageElement.headerLanguageCheck
            ).toContainText(getLanguageLabel(language));
        });
    }
});
