import { Page, Locator, expect } from '@playwright/test';
import { LoginErrorType, ROUTES } from '../config/constants';
import { UserLoginInfo } from '../config/types';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async open() {
        await this.page.goto(ROUTES.LOGIN);
    }

    async fillUsernameField(username: string) {
        await this.usernameInput.fill(username);
    }
    
    async fillPasswordField(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    async login(userInfo: UserLoginInfo) {
        await this.fillUsernameField(userInfo.username);
        await this.fillPasswordField(userInfo.password);
        await this.clickOnLoginButton();
    }

    async validateErrorMessageAppeared(errorType: LoginErrorType) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(errorType);
    }

    async validateLoginPageLoad() {
        await expect(this.page).toHaveURL(ROUTES.LOGIN);

    }
}