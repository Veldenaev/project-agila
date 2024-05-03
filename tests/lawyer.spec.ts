import { test, expect } from "@playwright/test";

test("has 'All Lawyers' in title", async ({ page }) => {
  await page.goto("/lawyer/all");
  await expect(page).toHaveTitle(/All Lawyers/);
});

test("has heading", async ({ page }) => {
  await page.goto("/lawyer/all");
  await expect(page.getByText(/lawyers/)).toBeVisible();
});

test("has table", async ({ page }) => {
  await page.goto("/lawyer/all");
  await expect(page.locator("table")).toBeVisible();
});

test("'View' button is visible", async ({ page }) => {
  await page.goto("/lawyer/all");
  await expect(page.getByRole("link", { name: /View/ }).first()).toBeVisible();
});

test("'Delete' button is visible", async ({ page }) => {
  await page.goto("/lawyer/all");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});

test("Clicking 'View' button leads to a lawyer's page", async ({ page }) => {
  await page.goto("/lawyer/all");
  await page.getByRole("link", { name: /View/ }).first().click();
  await expect(page).toHaveURL(/lawyer\/\d+/);
});

// test("Clicking 'Update' button leads to a form to update the lawyer", async ({
//   page,
// }) => {
//   await page.goto("/lawyer/all");
//   await page
//     .getByRole("button", { name: /Update/ })
//     .first()
//     .click();
//   await expect(page).toHaveURL(/lawyer\/update\/\d+/);
// });

test("individual lawyer page has 'Dashboard' in title", async ({ page }) => {
  await page.goto("/lawyer/1");
  await expect(page).toHaveTitle(/Dashboard/);
});

test("individual lawyer page has table", async ({ page }) => {
  await page.goto("/lawyer/1");
  await expect(page.locator("table").first()).toBeVisible();
});

test("'View' button is visible in individual lawyer page", async ({ page }) => {
  await page.goto("/lawyer/1");
  await expect(page.getByRole("link", { name: /View/ }).first()).toBeVisible();
});

test("'Delete' button is visible in individual lawyer page", async ({
  page,
}) => {
  await page.goto("/lawyer/1");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});
