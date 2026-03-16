import { test } from "../fixtures";

test('Add and remove products', async ({ inventoryPage, cartPage }) => {
    const FIRST_PRODUCT_INDEX = 0;
    const SECOND_PRODUCT_INDEX = 1;
    const PRODUCTS_AMOUNT_AFTER_REMOVING = 1;

    await test.step('Add two products to cart', async () => {
        await inventoryPage.addProductToCart(FIRST_PRODUCT_INDEX);
        await inventoryPage.addProductToCart(SECOND_PRODUCT_INDEX);
    });

    await test.step('Open cart', async () => {
        await inventoryPage.clickOnCart();
    });

    await test.step('Remove one product from cart', async () => {
        await cartPage.removeProduct(FIRST_PRODUCT_INDEX);
    });

    await test.step('Validate cart counter and items amount', async () => {
        await cartPage.validateCartIconCount(PRODUCTS_AMOUNT_AFTER_REMOVING.toString());
        await cartPage.validateCartItemsAmount(PRODUCTS_AMOUNT_AFTER_REMOVING);
    });
});