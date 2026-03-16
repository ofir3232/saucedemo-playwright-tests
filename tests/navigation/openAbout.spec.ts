import { DEFUALT_USER_LOGIN_INFO } from "../../config/constants";
import { test } from "../fixtures";

test('User can navigate to About page', { tag: '@regression' }, async ({ loginPage, navigationMenu, page }) => {
    await test.step('Login', async () => {
        await loginPage.open();
        await loginPage.login(DEFUALT_USER_LOGIN_INFO);
    });

    await test.step('Open the menu, click on about validate the about site opened', async () => {
        await navigationMenu.openMenu();
        await navigationMenu.goToAbout();

        await navigationMenu.validateAboutSiteOpened();
    });
});