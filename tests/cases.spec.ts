import { test, expect } from "@playwright/test";

test("has 'Cases' in title", async ({ page }) => {
  await page.goto("/cases/l_0");
  await expect(page).toHaveTitle(/Cases/);
});

test("has heading", async ({ page }) => {
  await page.goto("/cases/l_0");
  await expect(page.getByText(/cases/)).toBeVisible();
});

// test("has table", async ({ page }) => {
//   await page.goto("/cases/l_0");
//   await expect(page.locator("table")).toBeVisible();
// });

test("non-managers can't see 'Edit' button", async ({ page }) => {
  await page.goto("/cases/l_0");
  await expect(page.getByRole("button", { name: /Edit/ })).not.toBeVisible();
});

// test("managers can see 'Delete' button", async ({ page }) => {
//   await page.goto("/cases/l_1");
//   await expect(page.getByRole("button", { name: /Delete/ })).toBeVisible();
// });
