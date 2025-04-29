import { BasePage } from "../common/basePage.ts";
import type { Page } from "@playwright/test";
import {GoogleHomePageElement} from "../../pageComponents/google/googleHomePage.element.ts";

export class GoogleHomePageDesktop extends BasePage {
    public googleHomePageElement: GoogleHomePageElement;

    constructor(page: Page) {
        super(page);
        this.googleHomePageElement = new GoogleHomePageElement(page);
    }

    async openSearchedMalfiniEshop() {
    await this.searchMalfini();
    await this.clickGoogleResultMalfini();
    }

    async searchMalfini() {
        await this.navigate();
        await this.typeSearchInput('eshop malfini', true);
        await this.confirmReCaptchaIframeConfirmButton();
        await this.page.waitForLoadState('load');
    }

    async visit() {
        return await super.visit(process.env.GOOGLE_BASE_URL!);
    }

    async navigate() {
        await this.visit();
        await this.clickRejectAllButton();
    }

    async clickGoogleResultMalfini() {
        await this.googleHomePageElement.googleResultMalfiniUrl.click();
    }

    async getGoogleResultMalfiniUrl() {
        return this.googleHomePageElement.googleResultMalfiniUrl;

    }

    async confirmReCaptchaIframeConfirmButton() {
        try {
        await this.googleHomePageElement.reCaptchaIframeConfirmButton.waitFor({timeout: 6000});
        if (await this.googleHomePageElement.reCaptchaIframeConfirmButton.isVisible()) {
        await this.googleHomePageElement.reCaptchaIframeConfirmButton.click();
        }
        } catch {
            console.log('Confirm button not found in googleTests reCaptcha, continuing...');
        }
    }

    async clickConfirmSearchButton() {
        await this.googleHomePageElement.confirmSearchButton.click();
    }

    async typeSearchInput(searchText: string, confirmSearch: boolean) {
        await this.googleHomePageElement.searchTextarea.pressSequentially(searchText);
        if (confirmSearch) {
            await this.clickConfirmSearchButton();
        }
    }

    async clickRejectAllButton() {
        await this.googleHomePageElement.rejectAllButton.click();
    }
}
