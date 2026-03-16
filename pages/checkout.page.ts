import { Page, Locator, expect } from '@playwright/test';
import { CheckoutErrorType } from '../config/constants';
import { UserCheckoutInfo } from '../config/types';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;
  readonly errorMessage: Locator;
  readonly totalPrice: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.cancelButton = page.locator('#cancel');
    this.finishButton = page.locator('#finish');
    this.errorMessage = page.locator('[data-test="error"]');
    this.totalPrice = page.locator('.summary_subtotal_label');
    this.completeHeader = page.locator('.complete-header');
  }

  async fillFirstNameField(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastNameField(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async fillPostalCodeField(postalCode: string) {
    await this.postalCodeInput.fill(postalCode);
  }

  async fillUserInfo(userInfo: UserCheckoutInfo) {
    await this.firstNameInput.fill(userInfo.firstName);
    await this.lastNameInput.fill(userInfo.lastName);
    await this.postalCodeInput.fill(userInfo.postalCode);
  }

  async clickOnContinue() {
    await this.continueButton.click();
  }

  async clickOnFinish() {
    await this.finishButton.click();
  }

  async clickOnCancel() {
    await this.cancelButton.click();
  }

  async validateTotalPrice(expectedTotal: number) {
    const totalText = await this.totalPrice.textContent();
    const totalNumber = Number(totalText?.replace('Item total: $', ''));

    expect(totalNumber).toBeCloseTo(expectedTotal, 2);
  }

  async validateErrorMessage(errorType: CheckoutErrorType) {
    await expect(this.errorMessage).toContainText(errorType);
  }

  async validateCheckoutComplete() {
    const COMPLETE_MESSAGE = 'Thank you for your order!';

    await expect(this.completeHeader).toHaveText(COMPLETE_MESSAGE);
  }
}