import { LoginErrorType, PASSWORD } from "../../config/constants";
import { UserLoginInfo } from "../../config/types";
import { test } from "../fixtures";

test('Login with empty username', { tag: '@regression' }, async ({ loginPage }) => {
    const EMPTY_USERNAME = '';
    const USER_INFO: UserLoginInfo = { username: EMPTY_USERNAME, password: PASSWORD };

    await test.step('Open login page', async () => {
        await loginPage.open();
    });

    await test.step('Attempt login with empty username', async () => {
        await loginPage.login(USER_INFO);
    });

    await test.step('Validate error message for empty username', async () => {
        await loginPage.validateErrorMessageAppeared(LoginErrorType.EMPTY_USERNAME);
    });
});