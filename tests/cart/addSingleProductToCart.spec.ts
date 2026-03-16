import { test } from "../fixtures";

test('Add single product to cart', async ({ inventoryPage, cartPage }) => {
    const PRODUCT_INDEX = 0;
    const PRODUCTS_AMOUNT = '1';

    const PRODUCT_NAME: string = await test.step('Get product name from inventory', async () => {
        return await inventoryPage.getProductName(PRODUCT_INDEX);
    });

    await test.step('Add product to cart', async () => {
        await inventoryPage.addProductToCart(PRODUCT_INDEX);
    });

    await test.step('Validate cart icon counter', async () => {
        await inventoryPage.validateCartIconNumber(PRODUCTS_AMOUNT);
    });

    await test.step('Open cart', async () => {
        await inventoryPage.clickOnCart();
    });

    await test.step('Validate product appears in cart', async () => {
        await cartPage.validateCartItemNames([PRODUCT_NAME]);
    });
});