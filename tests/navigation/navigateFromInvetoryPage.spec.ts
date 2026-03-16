import { test } from "../fixtures";

test('User can navigate back to inventory from product page', { tag: '@regression' }, async ({ inventoryPage, productPage }) => {
    const FIRST_PRODUCT_INDEX = 0;

    await test.step('Click on the first product', async () => {
        await inventoryPage.openProductDetails(FIRST_PRODUCT_INDEX);
    });

    await test.step('Go back to invetory and validate the page opened', async () => {
        await productPage.goBackToInventory();
        await inventoryPage.validateInvetoryPageLoaded();
    });
});