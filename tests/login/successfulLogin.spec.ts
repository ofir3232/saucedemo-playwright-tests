import { PASSWORD, VALID_USERS } from "../../config/constants";
import { UserLoginInfo } from "../../config/types";
import { InventoryPage } from "../../pages/invetory.page";
import { test } from "../fixtures";

VALID_USERS.forEach(user => {
    test(`Login with valid user - ${user}`, { tag: '@smoke' }, async ({ page, loginPage }) => {
        const inventoryPage = new InventoryPage(page);
        const USER_INFO: UserLoginInfo = { username: user, password: PASSWORD };

        await test.step('Open login page', async () => {
            await loginPage.open();
        });

        await test.step(`Login with user: ${user}`, async () => {
            await loginPage.login(USER_INFO);
        });

        await test.step('Validate inventory page loaded', async () => {
            await inventoryPage.validateInvetoryPageLoaded();
        });
    });
});