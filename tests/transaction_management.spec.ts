import { test, expect } from "@playwright/test";

test("has 'Transaction' in title", async ({ page }) => {
  await page.goto("/transaction_management");
  await expect(page).toHaveTitle(/Transaction/);
});
