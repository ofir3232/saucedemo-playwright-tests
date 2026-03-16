import { DEFUALT_USER_LOGIN_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('User can logout successfully', { tag: '@smoke' }, async ({ navigationMenu, loginPage }) => {
    await test.step('Login', async () => {
        await loginPage.open();
        await loginPage.login(DEFUALT_USER_LOGIN_INFO);
    });

    await test.step('Logout from the menu', async () => {
        await navigationMenu.openMenu();
        await navigationMenu.logout();
    });

    await test.step('Validate that the login page was opened', async () => {
        await loginPage.validateLoginPageLoad();
    });
});