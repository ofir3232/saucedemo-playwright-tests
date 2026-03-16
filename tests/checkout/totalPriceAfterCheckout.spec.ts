import { DEFAULT_USER_CHECKOUT_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('Validate total price afer checkout for multiple products', async ({ inventoryPage, cartPage, checkoutPage }) => {
    const PRODUCTS = [0, 1];

    let totalPrice = 0;

    await test.step('Add multiple products to cart and calculate total', async () => {
        for (const index of PRODUCTS) {
            totalPrice += await inventoryPage.getProductPrice(index);
            await inventoryPage.addProductToCart(PRODUCTS[0]);
        }
    });

    await test.step('Open cart and proceed to checkout', async () => {
        await cartPage.openCart();
        await cartPage.clickOnCheckout();
    });

    await test.step('Fill user info', async () => {
        await checkoutPage.fillUserInfo(DEFAULT_USER_CHECKOUT_INFO);
        await checkoutPage.clickOnContinue();
    });

    await test.step('Validate total price', async () => {
        await checkoutPage.validateTotalPrice(totalPrice);
    });

    await test.step('Finish checkout', async () => {
        await checkoutPage.clickOnFinish();
    });

    await test.step('Validate checkout complete', async () => {
        await checkoutPage.validateCheckoutComplete();
    });
});