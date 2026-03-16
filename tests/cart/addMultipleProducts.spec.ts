import { test } from "../fixtures";

test('Add multiple product to cart', async ({ inventoryPage, cartPage }) => {
    const FISRT_PRODUCT_INDEX = 0;
    const SECOND_PRODUCT_INDEX = 1;
    const THIRD_PRODUCT_INDEX = 2;
    const PRODUCTS_AMOUNT = '3';

    const PRODUCT_NAMES: string[] = await test.step('Collect product names from inventory', async () => {
        return [
            await inventoryPage.getProductName(FISRT_PRODUCT_INDEX),
            await inventoryPage.getProductName(SECOND_PRODUCT_INDEX),
            await inventoryPage.getProductName(THIRD_PRODUCT_INDEX),
        ];
    });

    await test.step('Add products to cart', async () => {
        await inventoryPage.addProductToCart(FISRT_PRODUCT_INDEX);
        await inventoryPage.addProductToCart(FISRT_PRODUCT_INDEX);
        await inventoryPage.addProductToCart(FISRT_PRODUCT_INDEX);
    });

    await test.step('Validate cart counter', async () => {
        await inventoryPage.validateCartIconNumber(PRODUCTS_AMOUNT);
    });

    await test.step('Open cart', async () => {
        await inventoryPage.clickOnCart();
    });

    await test.step('Validate products appear in cart', async () => {
        await cartPage.validateCartItemNames(PRODUCT_NAMES);
    });
});