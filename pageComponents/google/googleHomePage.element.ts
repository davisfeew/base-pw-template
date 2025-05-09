import type { Locator, Page } from "@playwright/test";
import {BasePage} from "../../pageObjects/common/basePage.ts";

export class GoogleHomePageElement extends BasePage {

    rejectAllButton: Locator;
    searchTextarea: Locator;
    confirmSearchButton: Locator;
    reCaptchaIframeConfirmButton: Locator;
    googleResultMalfiniUrl: Locator;
    googleResultMalfiniTitle: Locator;
    googleSearchConfirmButton: Locator;

    constructor(page: Page) {
        super(page);

        this.rejectAllButton = this.page.locator("button:has-text('Odmítnout vše')");
        this.searchTextarea = this.page.locator("textarea[title='Hledat']");
        this.confirmSearchButton = this.page.locator("div[jsname='VlcLAe'] input[value='Hledat Googlem']");
        this.reCaptchaIframeConfirmButton = this.page.frameLocator('iframe[title="reCAPTCHA"]').locator('div[class="recaptcha-checkbox-border"]');
        this.googleResultMalfiniUrl = this.page.locator('a[href="https://shop.malfini.com/cz/cs"]');
        this.googleResultMalfiniTitle = this.page.locator('a[href="https://shop.malfini.com/cz/cs"] h3');
        this.googleSearchConfirmButton = this.page.locator('input[name="btnK"]');
    }
}
