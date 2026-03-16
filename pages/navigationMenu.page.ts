import { Page, Locator, expect } from '@playwright/test';
import { ROUTES } from '../config/constants';

export class NavigationMenu {
    readonly page: Page;
    readonly menuButton: Locator;
    readonly closeMenuButton: Locator;
    readonly allItemsButton: Locator;
    readonly aboutLink: Locator;
    readonly logoutButton: Locator;
    readonly resetAppStateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.closeMenuButton = page.locator('#react-burger-cross-btn');
        this.allItemsButton = page.locator('#inventory_sidebar_link');
        this.aboutLink = page.locator('#about_sidebar_link');
        this.logoutButton = page.locator('#logout_sidebar_link');
        this.resetAppStateButton = page.locator('#reset_sidebar_link');
    }

    async openMenu() {
        await this.menuButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }

    async resetAppState() {
        await this.resetAppStateButton.click();
    }

    async goToInventory() {
        await this.allItemsButton.click();
    }

    async goToAbout() {
        await this.aboutLink.click();
    }

    async validateMenuOptions() {
        await expect(this.logoutButton).toBeVisible();
        await expect(this.resetAppStateButton).toBeVisible();
        await expect(this.allItemsButton).toBeVisible();
        await expect(this.aboutLink).toBeVisible();
    }

    async validateAboutSiteOpened() {
        await expect(this.page).toHaveURL(ROUTES.ABOUT);
    }
}