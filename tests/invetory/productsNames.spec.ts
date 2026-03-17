import { test } from "../fixtures";

test.skip('Validate products names',  { tag: '@regression' }, async ({ inventoryPage }) => {
    const PRODUCTS_AMOUNT: number = await inventoryPage.getProductsAmount();

    for (let i = 0; i < PRODUCTS_AMOUNT; i++) {
        await test.step(`Validate product ${i} name`, async () => {
            await inventoryPage.validateProductName(i)
        });
    }
});