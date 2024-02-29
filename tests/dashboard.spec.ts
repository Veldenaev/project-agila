import { test, expect } from "@playwright/test";

test("has 'Dashboard' in title", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page).toHaveTitle(/Dashboard/);
});
