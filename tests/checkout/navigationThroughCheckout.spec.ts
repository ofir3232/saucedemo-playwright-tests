import { DEFAULT_USER_CHECKOUT_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('Navigate back and continue checkout', async ({ inventoryPage, cartPage, checkoutPage }) => {
    const PRODUCT_INDEX = 0;

    await test.step('Add product to cart and open checkout', async () => {
        await inventoryPage.addProductToCart(PRODUCT_INDEX);
        await cartPage.openCart();
        await cartPage.clickOnCheckout();
    });

    await test.step('Fill user info', async () => {
        await checkoutPage.fillUserInfo(DEFAULT_USER_CHECKOUT_INFO);
    });

    await test.step('Cancel checkout and go back to inventory', async () => {
        await checkoutPage.clickOnCancel();
        await cartPage.clickOnContinueShopping();
    });

    await test.step('Reopen cart and checkout', async () => {
        await cartPage.openCart();
        await cartPage.clickOnCheckout();
        await checkoutPage.fillUserInfo(DEFAULT_USER_CHECKOUT_INFO);
    });

    await test.step('Continue and finish checkout', async () => {
        await checkoutPage.clickOnContinue();
        await checkoutPage.clickOnFinish();
    });

    await test.step('Validate checkout complete', async () => {
        await checkoutPage.validateCheckoutComplete();
    });
});