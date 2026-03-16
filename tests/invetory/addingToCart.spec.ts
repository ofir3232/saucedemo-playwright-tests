import { test } from "../fixtures";

test('Adding to cart and counting', { tag: '@smoke' }, async ({ inventoryPage }) => {
    const FIRST_ITEM_INDEX = 0;
    const PRODUCTS_AMOUNT = '1';

    await test.step('Add first product to cart', async () => {
        await inventoryPage.addProductToCart(FIRST_ITEM_INDEX);
    });

    await test.step('Validate cart icon number', async () => {
        await inventoryPage.validateCartIconNumber(PRODUCTS_AMOUNT);
    });
});