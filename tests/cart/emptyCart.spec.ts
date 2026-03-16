import { test } from "../fixtures";

test('Validate cart is empty', async ({ cartPage }) => {
    await test.step('Open cart page', async () => {
        await cartPage.openCart();
    });

    await test.step('Validate cart is empty', async () => {
        await cartPage.validateCartIsEmpty();
    });
});