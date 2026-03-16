import { LoginErrorType } from "../../config/constants";
import { UserLoginInfo } from "../../config/types";
import { test } from "../fixtures";

test('Login with empty username and password', { tag: '@regression' }, async ({ loginPage }) => {
    const EMPTY_VALUE = '';
    const USER_INFO: UserLoginInfo = { username: EMPTY_VALUE, password: EMPTY_VALUE };

    await test.step('Open login page', async () => {
        await loginPage.open();
    });

    await test.step('Attempt login with empty username and password', async () => {
        await loginPage.login(USER_INFO);
    });

    await test.step('Validate error message for empty username', async () => {
        await loginPage.validateErrorMessageAppeared(LoginErrorType.EMPTY_USERNAME);
    });
});