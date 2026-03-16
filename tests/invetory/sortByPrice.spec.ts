import { SortOption } from "../../config/constants";
import { test } from "../fixtures";

test('Sort products by price',  { tag: '@regression' }, async ({ inventoryPage }) => {
    await test.step('Select sort option Low to High and validate', async () => {
        await inventoryPage.selectSortOptionAndValidate(SortOption.LOW_TO_HIGH);
    });

    await test.step('Select sort option High to Low and validate', async () => {
        await inventoryPage.selectSortOptionAndValidate(SortOption.HIGH_TO_LOW);
    });
});