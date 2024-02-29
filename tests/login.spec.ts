import { test, expect } from "@playwright/test";

test("has 'Login' in title", async ({ page }) => {
  await page.goto("/login");
  await expect(page).toHaveTitle(/Login/);
});

test("has 'Login' button", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
})

test("'Login' button is disabled", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByRole('button', { name: 'Login' })).toBeDisabled();
})
