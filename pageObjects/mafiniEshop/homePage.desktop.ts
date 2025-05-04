import {BasePage} from "../common/basePage.ts";
import type {Page} from "@playwright/test";
import {HomePageElement} from "../../pageComponents/mafini/homePage.element.ts";
import {LanguageCode} from "../../helpers/language.ts";

export class HomePageDesktop extends BasePage {
    public malfiniHomePageElement: HomePageElement;

    constructor(page: Page) {
        super(page);
        this.malfiniHomePageElement = new HomePageElement(page);
    }

    async navigate() {
        await this.visit();
        await this.page.waitForLoadState('load');
        await this.allowCookies();
    }

    async visit() {
        return await super.visit(process.env.MALFINI_ESHOP_BASE_URL!);
    }

    async typeSearchInput(searchString: string) {
        await this.malfiniHomePageElement.searchInput.waitFor();
        await this.malfiniHomePageElement.searchInput.pressSequentially(searchString);
    }

    /**
     * const results = await malfiniHomePage.getSearchResults();
     * expect(results.length).toBeGreaterThan(0);
     * console.log(results.map(r => r.name));
     */
    async getSearchedResultsItems() {
        await this.malfiniHomePageElement.searchedItemsTableElement.first().waitFor({timeout: 5000});
        return await this.malfiniHomePageElement.searchedItemsTableElement.evaluateAll((items) =>
            items.map(item => {
                const name = item.querySelector('span')?.textContent?.trim() || '';
                const href = item.querySelector('a')?.getAttribute('href') || '';
                const img = item.querySelector('img')?.getAttribute('src') || '';
                return {name, href, img};
            })
        );
    }

    async selectLanguage(language: LanguageCode) {
        await this.openLanguageDropdown();
        await this.malfiniHomePageElement.headerLanguageCountryElements.first().waitFor({state: "visible"});
        await this.malfiniHomePageElement.headerLanguageCountryElements.getByText(language).click();
        await this.allowCookies();
    }

    async openLanguageDropdown() {
        await this.waitForPreloaderHidden();
        await this.malfiniHomePageElement.headerOpenLanguageDropdown.click();
    }

    getDOMLanguage(language: string) {
        return this.page.locator(`html[lang="${language}"]`);
    }

    async clickSearchDropdownByIndex(index: number) {
        const results = await this.getSearchedResultsItems();
        const productNames = results.map(r => r.name);
        await this.malfiniHomePageElement.searchedItemsTableElement.nth(index).click();
        return productNames[index]; //selected item name
    }

    async allowCookies() {
        if (await this.malfiniHomePageElement.cookiesAllowButton.isVisible()) {
            await this.malfiniHomePageElement.cookiesAllowButton.waitFor({state: "visible"});
            await this.malfiniHomePageElement.cookiesAllowButton.click();
            await this.malfiniHomePageElement.cookiesAllowButton.waitFor({state: "hidden"});
        }
    }

}
