import { DEFAULT_USER_CHECKOUT_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('Successful checkout', async ({ inventoryPage, cartPage, checkoutPage }) => {
    const PRODUCT_INDEX = 0;

    await test.step('Add product to cart', async () => {
        await inventoryPage.addProductToCart(PRODUCT_INDEX);
    });

    await test.step('Open cart and go to checkout', async () => {
        await cartPage.openCart();
        await cartPage.clickOnCheckout();
    });

    await test.step('Fill user information and click on continue', async () => {
        await checkoutPage.fillUserInfo(DEFAULT_USER_CHECKOUT_INFO);
        await checkoutPage.clickOnContinue();
    });

    await test.step('Finish checkout and validate it is complete', async () => {
        await checkoutPage.clickOnFinish();
        await checkoutPage.validateCheckoutComplete();
    });
});