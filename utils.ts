import { Page } from "playwright/test";

export const openHomePage = async (page: Page) => {
    await page.goto("");
};