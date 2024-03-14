import { test, expect } from "@playwright/test";

test("has 'Accounts' in title", async ({ page }) => {
  await page.goto("/accounts/0");
  await expect(page).toHaveTitle(/Accounts/);
});

test("has heading", async ({ page }) => {
  await page.goto("/accounts/0");
  await expect(page.getByText(/accounts/)).toBeVisible();
});

test("has table", async ({ page }) => {
  await page.goto("/accounts/0");
  await expect(page.locator("table")).toBeVisible();
});

test("non-managers can't see 'Edit' button", async ({ page }) => {
  await page.goto("/accounts/0");
  await expect(page.getByRole("button", { name: /Edit/ })).not.toBeVisible();
});

// test("managers can see 'Delete' button", async ({ page }) => {
//   await page.goto("/accounts/1");
//   await expect(page.getByRole("button", { name: /Delete/ })).toBeVisible();
// });
