import {BasePage} from "../common/basePage.ts";
import type {Page} from "@playwright/test";
import {ProductPageElement} from "../../pageComponents/mafini/productPage.element.ts";

export class ProductPageDesktop extends BasePage {
    public productPageElement: ProductPageElement;

    constructor(page: Page) {
        super(page);
        this.productPageElement = new ProductPageElement(page);
    }

    async visit() {
        return await super.visit(process.env.MALFINI_ESHOP_BASE_URL!);
    }

    async formatSearchedTitle(productPage:ProductPageDesktop) {
        const code = await productPage.getTitleCode();
        const name = await productPage.getTitleName();
        return `${code} - ${name}`;
    }

    async getTitleCode() {
        return await this.productPageElement.productTitleLocator.locator('span').innerText();
    }

    async getTitleName() {
        return await this.productPageElement.productTitleLocator.evaluate(el =>
            el.childNodes[0]?.textContent?.trim()
        );
    }

    async getSize() {
        return await this.productPageElement.productSizesLocator.innerText();
    }

}
