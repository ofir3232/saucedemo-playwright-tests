import { LoginErrorType, DEFAULT_USER } from "../../config/constants";
import { UserLoginInfo } from "../../config/types";
import { test } from "../fixtures";

test('Login with empty password', { tag: '@smoke' }, async ({ loginPage }) => {
    const EMPTY_PASSWORD = '';
    const USER_INFO: UserLoginInfo = { username: DEFAULT_USER, password: EMPTY_PASSWORD };

    await test.step('Open login page', async () => {
        await loginPage.open();
    });

    await test.step('Attempt login with empty password', async () => {
        await loginPage.login(USER_INFO);
    });

    await test.step('Validate error message for empty password', async () => {
        await loginPage.validateErrorMessageAppeared(LoginErrorType.EMPTY_PASSWORD);
    });
});