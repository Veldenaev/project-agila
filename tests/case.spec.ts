import { test, expect } from "@playwright/test";

test("has 'Cases' in title", async ({ page }) => {
  await page.goto("/case/all");
  await expect(page).toHaveTitle(/All Cases/);
});

test("has heading", async ({ page }) => {
  await page.goto("/case/all");
  await expect(page.getByText(/Cases/)).toBeVisible();
});

test("has table", async ({ page }) => {
  await page.goto("/case/all");
  await expect(page.locator("table")).toBeVisible();
});

test("'View' button is visible", async ({ page }) => {
  await page.goto("/case/all");
  await expect(
    page.getByRole("button", { name: /View/ }).first(),
  ).toBeVisible();
});

test("'Update' button is visible", async ({ page }) => {
  await page.goto("/case/all");
  await expect(
    page.getByRole("button", { name: /Update/ }).first(),
  ).toBeVisible();
});

test("Clicking 'View' button leads to a case's page", async ({ page }) => {
  await page.goto("/case/all");
  await page.getByRole("button", { name: /View/ }).first().click();
  await expect(page).toHaveURL(/case\/\d+/);
});

test("Clicking 'Update' button leads to a form to update the case", async ({
  page,
}) => {
  await page.goto("/case/all");
  await page
    .getByRole("button", { name: /Update/ })
    .first()
    .click();
  await expect(page).toHaveURL(/case\/update\/\d+/);
});

test("individual case page has 'Information' in title", async ({ page }) => {
  await page.goto("/case/1234");
  await expect(page).toHaveTitle(/Information/);
});

test("individual case page has table", async ({ page }) => {
  await page.goto("/case/1234");
  await expect(page.locator("table")).toBeVisible();
});
