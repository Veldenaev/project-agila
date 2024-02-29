import { test, expect } from "@playwright/test";

test("has 'Notification' in title", async ({ page }) => {
  await page.goto("/notification_management");
  await expect(page).toHaveTitle(/Notification/);
});
