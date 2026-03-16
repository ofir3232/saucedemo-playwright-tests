import { test } from "../fixtures";

test('Products remain in cart after navigating back and forth', { tag: '@regression' }, async ({ inventoryPage, productPage, cartPage }) => {
    const PRODUCT_INDEX = 0;

    const PRODUCT_NAME = await test.step('Get product name', async () => {
        return await inventoryPage.getProductName(PRODUCT_INDEX);
    });

    await test.step('Add product to cart and open its details', async () => {
        await inventoryPage.addProductToCart(PRODUCT_INDEX);
        await inventoryPage.openProductDetails(PRODUCT_INDEX);
    });

    await test.step('Navigate back to inventory', async () => {
        await productPage.goBackToInventory();
    });

    await test.step('Open cart and validate product remains', async () => {
        await cartPage.openCart();
        await cartPage.validateCartItemNames([PRODUCT_NAME]);
    });
});