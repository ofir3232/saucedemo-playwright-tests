import { Page, Locator, expect } from '@playwright/test';
import { ROUTES, SortOption } from '../config/constants';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryItems: Locator;
    readonly sortSelect: Locator;
    readonly addToCartButtons: Locator;
    readonly removeFromCartButtons: Locator
    readonly cartIcon: Locator;
    readonly itemNames: Locator;
    readonly itemPrices: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item');
        this.sortSelect = page.locator('.product_sort_container');
        this.addToCartButtons = page.getByText('Add to cart');
        this.removeFromCartButtons = page.getByText('Remove');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.itemNames = page.locator('.inventory_item_name');
        this.itemPrices = page.locator('.inventory_item_price');
    }

    async getProductsAmount(): Promise<number> {
        return await this.itemNames.count();
    }

    async getProductPrice(index: number): Promise<number> {
        const priceText = await this.itemPrices.nth(index).textContent();
        return Number(priceText?.replace('$', ''));
    }
    
    async getProductName(index: number): Promise<string> {
        const PRODUCT = this.itemNames.nth(index);

        return await PRODUCT.innerText();
    }

    async clickOnCart(): Promise<void> {
        await this.cartIcon.click();
    }

    async addProductToCart(index: number): Promise<void> {
        await this.addToCartButtons.nth(index).click();
    }

    async selectSortOptionAndValidate(sortOption: SortOption) {
        await this.sortSelect.selectOption(sortOption);

        switch (sortOption) {
            case 'az':
                await this.validateItemNamesAreSorted('asc');
                break;
            case 'za':
                await this.validateItemNamesAreSorted('desc');
                break;
            case 'lohi':
                await this.validateItemPricesAreSorted('asc');
                break;
            case 'hilo':
                await this.validateItemPricesAreSorted('desc');
                break;
    }
    }

    async removeProductFromCart(index: number): Promise<void> {
        await this.removeFromCartButtons.nth(index).click();
    }

    async goToCart(): Promise<void> {
        await this.cartIcon.click();
    }

    async openProductDetails(index: number): Promise<void> {
        await this.itemNames.nth(index).click();
    }

    async validateCartIconNumber(numberOnScreen: string): Promise<void> {
        await expect(this.cartIcon).toHaveText(numberOnScreen);
    }

    async validateInvetoryPageLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(ROUTES.INVENTORY);
        await expect(this.inventoryItems.first()).toBeVisible();
    }

    private async validateItemNamesAreSorted(order: 'asc' | 'desc' = 'asc') {
        const ITEM_NAMES = await this.itemNames.allTextContents();
        const sortedNames = [...ITEM_NAMES].sort((a, b) => 
            a.localeCompare(b, undefined, { sensitivity: 'base' }));
        if (order === 'asc') {
            expect(ITEM_NAMES).toEqual(sortedNames);
        } else {
            expect(ITEM_NAMES).toEqual(sortedNames.reverse());
        }
    }

    private async validateItemPricesAreSorted(order: 'asc' | 'desc' = 'asc') {
        const pricesText = await this.itemPrices.allTextContents();
        const prices = pricesText.map(text => parseFloat(text.replace('$', '')));
        const sortedPrices = [...prices].sort((a, b) => a - b);
        if (order === 'asc') {
            expect(prices).toEqual(sortedPrices);
        } else {
            expect(prices).toEqual(sortedPrices.reverse());
        }
  }

    async validateProductName(index: number): Promise<void> {
        const SAUCE_LABS_NAME = 'Sauce Labs';
        
        expect.soft(this.itemNames.nth(index), 'The name should contain the `Sauce Labs` name')
            .toContainText(SAUCE_LABS_NAME);
    }
}