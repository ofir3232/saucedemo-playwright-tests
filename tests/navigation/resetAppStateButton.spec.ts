import { test } from "../fixtures";

test('Reset app state clears cart', async ({ inventoryPage, navigationMenu }) => {
    const FIRST_PRODUCT_INDEX = 0;
    const EMPTY_CART = '';

    await test.step('Add the first item to cart', async () => {
        await inventoryPage.addProductToCart(FIRST_PRODUCT_INDEX);
    });

    await test.step('Open the menu and click on reset', async () => {
        await navigationMenu.openMenu();
        await navigationMenu.resetAppState();
    });

    await test.step('Validate the cart icon ia empty', async () => {
        await inventoryPage.validateCartIconNumber(EMPTY_CART);
    });
});