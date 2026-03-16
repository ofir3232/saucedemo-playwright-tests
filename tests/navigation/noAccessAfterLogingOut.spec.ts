import { DEFUALT_USER_LOGIN_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('User cannot access inventory page after logout', { tag: '@regression' }, async ({ page, navigationMenu, loginPage }) => {
    await test.step('Login', async () => {
        await loginPage.open();
        await loginPage.login(DEFUALT_USER_LOGIN_INFO);
    });

    await test.step('Open the menu, click on logout', async () => {
        await navigationMenu.openMenu();
        await navigationMenu.logout();
    });

    await test.step('Click on login, validate that there is no access', async () => {
        await loginPage.clickOnLoginButton();
        await loginPage.validateLoginPageLoad();
    });
});