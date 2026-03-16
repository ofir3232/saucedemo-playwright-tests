import { test as base } from '@playwright/test';
import { InventoryPage } from '@pages/invetory.page';
import { ProductPage } from '@pages/product.page';
import { CartPage } from '@pages/cart.pages';
import { CheckoutPage } from '@pages/checkout.page';
import { DEFUALT_USER_LOGIN_INFO } from '../config/constants';
import { NavigationMenu } from '@pages/navigationMenu.page';
import { LoginPage } from '@pages/login.page';

type Fixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage,
    navigationMenu: NavigationMenu,
};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(DEFUALT_USER_LOGIN_INFO);

        await use(new InventoryPage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    navigationMenu: async ({ page }, use) => {
        await use(new NavigationMenu(page));
    },
});