import { LoginErrorType, PASSWORD } from "../../config/constants";
import { UserLoginInfo } from "../../config/types";
import { test } from "../fixtures";

test('Login with non-existing user',  { tag: '@regression' }, async ({ loginPage }) => {
    const FAKE_USER = 'hello';
    const USER_INFO: UserLoginInfo = { username: FAKE_USER, password: PASSWORD }; 

    await test.step('Open login page', async () => {
      await loginPage.open();
    });

    await test.step('Attempt login with non-existing user', async () => {
      await loginPage.login(USER_INFO);
    });

    await test.step('Validate error message for invalid credentials', async () => {
      await loginPage.validateErrorMessageAppeared(LoginErrorType.INVALID_CREDENTIALS);
    });
  });