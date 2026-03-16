import { test } from "../fixtures";

test('Open product details from cart', { tag: '@regression' }, async ({ inventoryPage, productPage, cartPage }) => {
    const PRODUCT_INDEX = 0;

    await test.step('Add product to cart', async () => {
        await inventoryPage.addProductToCart(PRODUCT_INDEX);
    });
    
    await test.step('Open cart', async () => {
        await cartPage.openCart();
    });

    await test.step('Open product details from cart', async () => {
        await cartPage.openItemDetails(PRODUCT_INDEX);
    });

    await test.step('Validate product page loaded', async () => {
        await productPage.validateProductPageLoad();
    });
});