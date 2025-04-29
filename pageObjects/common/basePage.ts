import {expect} from "@playwright/test";
import type { Page, Locator} from "@playwright/test";

export class BasePage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async visit(url: string, options?: Parameters<typeof this.page.goto>[1]) {
        return await this.page.goto(url, options);
    }

    async reload(){
        await this.page.reload({ waitUntil: "domcontentloaded" });
    }

    async waitForPreloaderHidden() {
        await this.page.waitForSelector('#preloader', { state: 'hidden', timeout: 10000 });

    }

    async isElementVisible(locator: Locator, timeout = 15000) {
        try {
            await locator.waitFor({ state: "visible", timeout: timeout });
            if (await locator.isVisible()) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async isElementAttached(locator: Locator, timeout = 30000) {
        try {
            await locator.waitFor({ state: "attached", timeout: timeout });
            const elementHandle = await locator.elementHandle({ timeout: 1000 });
            if (elementHandle !== null) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async isUrl(url: string) {
        const realUrl: string = this.page.url();
        expect(realUrl).toContain(url);
    }


    public async setSessionStorageItem({ itemName, itemValue }: { itemName: string; itemValue: string }) {
        await this.page.evaluate(
            ([itemName, itemValue]) => {
                window.sessionStorage.setItem(itemName, itemValue);
            },
            [itemName, itemValue]
        );
    }

    public async getSessionStorageItemValue({ itemName }: { itemName: string }) {
        return await this.page.evaluate(
            (itemName) => {
                return window.sessionStorage.getItem(itemName);
            },
            itemName
        );
    }
    public async getLocalStorageItemValue({ itemName }: { itemName: string }) {
        return await this.page.evaluate(
            (itemName) => {
                return window.localStorage.getItem(itemName);
            },
            itemName
        );
    }

    public async clickToNavigateTo({
                                       locatorToClick,
                                       expectedUrl,
                                   }: {
        locatorToClick: Locator;
        expectedUrl: string;
    }) {
        await locatorToClick.click();
        const response = await this.page.waitForURL(expectedUrl);
        return response;
    }
}
