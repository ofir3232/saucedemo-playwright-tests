import { LOCKED_USER, LoginErrorType, PASSWORD } from "../../config/constants";
import { UserLoginInfo } from "../../config/types";
import { test } from "../fixtures";

test('Login with locked user', { tag: '@regression' }, async ({ loginPage }) => {
    const USER_INFO: UserLoginInfo = { username: LOCKED_USER, password: PASSWORD };

    await test.step('Open login page', async () => {
        await loginPage.open();
    });

    await test.step('Attempt login with locked_out_user', async () => {
        await loginPage.login(USER_INFO);
    });

    await test.step('Validate error message for locked out user', async () => {
        await loginPage.validateErrorMessageAppeared(LoginErrorType.LOCKED_OUT_USER);
    });
});