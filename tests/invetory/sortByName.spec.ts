import { SortOption } from "../../config/constants";
import { test } from "../fixtures";

test('Sort products by name',  { tag: '@regression' }, async ({ inventoryPage }) => {
    await test.step('Select sort option A to Z and validate', async () => {
        await inventoryPage.selectSortOptionAndValidate(SortOption.A_TO_Z);
    });

    await test.step('Select sort option Z to A and validate', async () => {
        await inventoryPage.selectSortOptionAndValidate(SortOption.Z_TO_A);
    });
});