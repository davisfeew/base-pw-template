import {BasePage} from "../../pageObjects/common/basePage.ts";
import type { Locator, Page } from "@playwright/test";

export class HomePageElement extends BasePage {
    public cookiesAllowButton: Locator;
    public searchInput: Locator;
    public searchedItemsTableElement: Locator;
    public headerTopElement: Locator;
    public headerOpenLanguageDropdown: Locator;
    public headerLanguageCountryElements: Locator;
    public headerLanguageCheck: Locator;

    constructor(page: Page) {
        super(page);
        this.cookiesAllowButton = this.page.locator("button[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']");
        this.searchInput = this.page.locator("input[id='search']");
        this.searchedItemsTableElement = this.page.locator("li.HeaderControl__search-li >> a");
        this.headerTopElement = this.page.locator("div[class='HeaderTop']");
        this.headerOpenLanguageDropdown = this.page.locator(`div.HeaderTop__cell > div.flex.items-center.mr-2 > div.flex.items-center:nth-child(3) > div[aria-haspopup="menu"]`);
        this.headerLanguageCountryElements = this.page.locator("div[role=menu] button[role=menuitem] div");
        this.headerLanguageCheck = this.page.locator("div[class='HeaderTop_Sign']");

    }
}
