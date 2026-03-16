import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly title: Locator;
    readonly description: Locator;
    readonly price: Locator;
    readonly addToCartButton: Locator;
    readonly backButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.inventory_details_name');
        this.description = page.locator('.inventory_details_desc');
        this.price = page.locator('.inventory_details_price');
        this.addToCartButton = page.getByText('Add to cart');
        this.backButton = page.locator("#back-to-products");
    }

    async validateProductPageLoad(): Promise<void> {
        await expect.soft(this.title).toBeVisible();
        await expect.soft(this.description).toBeVisible();
        await expect.soft(this.price).toBeVisible();
    }

    async addToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    async removeFromCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    async goBackToInventory(): Promise<void> {
        await this.backButton.click();
    }
}