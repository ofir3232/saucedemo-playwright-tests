import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItemNames: Locator;
    readonly cartItemsPrices: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly removeButtons: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItemNames = page.locator('.inventory_item_name');
        this.cartItemsPrices = page.locator('inventory_item_price');
        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.removeButtons = page.getByText('Remove');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async openCart(): Promise<void> {
        await this.page.goto('/cart.html');
    }

    async openItemDetails(index: number) {
        await this.cartItemNames.nth(index).click();
    }

    async getCartItemsPrices(): Promise<number[]> {
        const pricesText = await this.cartItemsPrices.allTextContents();
        return pricesText.map(text => parseFloat(text.replace('$', '')));
    }

    async removeProduct(index: number) {
        await this.removeButtons.nth(index).click();
    }

    async clickOnCheckout() {
        await this.checkoutButton.click();
    }

    async clickOnContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async validateTotalPrice(expectedTotal: number) {
        const prices = await this.getCartItemsPrices();
        const total = prices.reduce((sum, p) => sum + p, 0);
        expect(total).toBeCloseTo(expectedTotal, 2);
    }

    async validateCartIconCount(count: string): Promise<void> {
        await expect(this.cartIcon).toHaveText(count);
    }

    async validateCartItemsAmount(count: number): Promise<void> {
        await expect(this.cartItemNames).toHaveCount(count);
    }

    async validateCartItemNames(expectedNames: string[]) {
        const CART_NAMES = await this.cartItemNames.allTextContents();

        expect([...CART_NAMES].sort()).toEqual([...expectedNames].sort());
    }

    async validateCartIsEmpty() {
        expect(await this.cartItemNames.count()).toBe(0);
    }
}