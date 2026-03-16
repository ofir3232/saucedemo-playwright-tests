import { test } from "../fixtures";

test('Open products details',  { tag: '@regression' }, async ({ inventoryPage, productPage }) => {
    const PRODUCTS_AMOUNT: number = await inventoryPage.getProductsAmount();

    for (let i = 0; i < PRODUCTS_AMOUNT; i++) {
        await test.step(`Open product ${i} details`, async () => {
            await inventoryPage.openProductDetails(i);
        });

        await test.step('Validate product page loaded', async () => {
            await productPage.validateProductPageLoad();
        });

        await test.step('Return to inventory page', async () => {
            await productPage.goBackToInventory();
        });
    }
});
