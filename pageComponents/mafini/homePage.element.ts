import {BasePage} from "../../pageObjects/common/basePage.ts";
import type { Locator, Page } from "@playwright/test";

export class HomePageElement extends BasePage {
    public cookiesAllowButton: Locator;
    public searchInput: Locator;
    public searchedItemsTable: Locator;
    public headerTop: Locator;

    constructor(page: Page) {
        super(page);
        this.cookiesAllowButton = this.page.locator("button[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']");
        this.searchInput = this.page.locator("input[id='search']");
        this.searchedItemsTable = this.page.locator("li.HeaderControl__search-li >> a");
        this.headerTop = this.page.locator("div[class='HeaderTop']");
    }
}
