import { DEFUALT_USER_LOGIN_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('Navigation menu displays all options', { tag: '@regression' }, async ({ loginPage, navigationMenu }) => {
    await test.step('Login', async () => {
        await loginPage.open();
        await loginPage.login(DEFUALT_USER_LOGIN_INFO);
    });

    await test.step('Open the menu and validate its display', async () => {
        await navigationMenu.openMenu();
        await navigationMenu.validateMenuOptions();
    });
});