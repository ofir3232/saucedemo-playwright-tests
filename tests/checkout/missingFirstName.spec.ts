import { CheckoutErrorType, DEFAULT_USER_CHECKOUT_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('Missing first name', { tag: '@regression' }, async ({ inventoryPage, cartPage, checkoutPage }) => {
    const PRODUCT_INDEX = 0;
    const USER_INFO = {
        firstName: '',
        lastName: DEFAULT_USER_CHECKOUT_INFO.lastName,
        postalCode: DEFAULT_USER_CHECKOUT_INFO.postalCode,
    }

    await test.step('Add product to cart and open checkout', async () => {
        await inventoryPage.addProductToCart(PRODUCT_INDEX);
        await cartPage.openCart();
        await cartPage.clickOnCheckout();
    });

    await test.step('Fill user info with missing first name', async () => {
        await checkoutPage.fillUserInfo(USER_INFO);
        await checkoutPage.clickOnContinue();
    });

    await test.step('Validate error message for first name', async () => {
        await checkoutPage.validateErrorMessage(CheckoutErrorType.EMPTY_FIRST_NAME);
    });
});