import { test } from "../fixtures";

test('Add and remove product from cart', { tag: '@regression' }, async ({ inventoryPage }) => {
    const FIRST_ITEM_INDEX = 0;
    const SECOND_ITEM_INDEX = 1;
    const PRODUCTS_AMOUNT = '1';

    await test.step('Add two products to cart', async () => {
        await inventoryPage.addProductToCart(FIRST_ITEM_INDEX);
        await inventoryPage.addProductToCart(SECOND_ITEM_INDEX);
    });

    await test.step('Remove first product from cart', async () => {
        await inventoryPage.removeProductFromCart(FIRST_ITEM_INDEX);
    });

    await test.step('Validate cart icon number after removal', async () => {
        await inventoryPage.validateCartIconNumber(PRODUCTS_AMOUNT);
    });
});