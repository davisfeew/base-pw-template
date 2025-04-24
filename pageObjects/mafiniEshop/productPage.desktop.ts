import {BasePage} from "../common/basePage";
import type {Page} from "@playwright/test";
import {ProductPageElement} from "../../pageComponents/mafini/productPage.element";

export class ProductPageDesktop extends BasePage {
    public productPageElement: ProductPageElement;

    constructor(page: Page) {
        super(page);
        this.productPageElement = new ProductPageElement(page);
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

    async formatSearchedTitle(productPage:ProductPageDesktop) {
        const code = await productPage.getTitleCode();
        const name = await productPage.getTitleName();
        return `${code} - ${name}`;
    }
}
