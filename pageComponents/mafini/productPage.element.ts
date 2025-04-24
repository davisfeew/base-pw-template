import {BasePage} from "../../pageObjects/common/basePage";
import type { Locator, Page } from "@playwright/test";

export class ProductPageElement extends BasePage {
    public productImageLocator: Locator;
    public productTitleLocator: Locator;
    public productSizesLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.productImageLocator = page.locator('.PhotoGallery__image-preview img');
        this.productTitleLocator = page.locator('h2.Description__title');
        this.productSizesLocator = page.locator('div[class="Description__description-sizes"]');
    }
}
