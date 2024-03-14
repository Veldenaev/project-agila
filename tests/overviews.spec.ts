import { test, expect } from "@playwright/test";

test("has 'Case Overview' in title", async ({ page }) => {
  await page.goto("/overviews/0");
  await expect(page).toHaveTitle(/Case Overview/);
});

test("has heading", async ({ page }) => {
  await page.goto("/overviews/0");
  await expect(page.getByText(/overview/)).toBeVisible();
});

test("has table", async ({ page }) => {
  await page.goto("/overviews/0");
  await expect(page.locator("table")).toBeVisible();
});
