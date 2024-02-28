import { test, expect } from "@playwright/test";

test("has 'Login' in title", async ({ page }) => {
  await page.goto("/login");
  await expect(page).toHaveTitle(/Login/);
});
