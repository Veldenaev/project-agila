import { test, expect } from "@playwright/test";

test("has 'All Clients' in title", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page).toHaveTitle(/All Clients/);
});

test("has heading", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page.getByText(/clients/)).toBeVisible();
});

test("has table", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page.locator("table")).toBeVisible();
});

test("'View' button is visible", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page.getByRole("link", { name: /View/ }).first()).toBeVisible();
});

test("'Delete' button is visible", async ({ page }) => {
  await page.goto("/client/all");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});

test("Clicking 'View' button leads to a client's page", async ({ page }) => {
  await page.goto("/client/all");
  await page.getByRole("link", { name: /View/ }).first().click();
  await expect(page).toHaveURL(/client\/\d+/);
});

// test("Clicking 'Update' button leads to a form to update the client", async ({
//   page,
// }) => {
//   await page.goto("/client/all");
//   await page
//     .getByRole("button", { name: /Update/ })
//     .first()
//     .click();
//   await expect(page).toHaveURL(/client\/update\/\d+/);
// });

test("individual client page has 'Dashboard' in title", async ({ page }) => {
  await page.goto("/client/1");
  await expect(page).toHaveTitle(/Dashboard/);
});

test("individual client page has table", async ({ page }) => {
  await page.goto("/client/1");
  await expect(page.locator("table").first()).toBeVisible();
});

test("'View' button is visible in individual client page", async ({ page }) => {
  await page.goto("/client/1");
  await expect(page.getByRole("link", { name: /View/ }).first()).toBeVisible();
});

test("'Delete' button is visible in individual client page", async ({
  page,
}) => {
  await page.goto("/client/1");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});

// test("'contract' text is visible in individual client page", async ({
//   page,
// }) => {
//   await page.goto("/client/1");
//   await expect(page.getByText(/contract/)).toBeVisible();
// });

test("'cases' text is visible in individual client page", async ({ page }) => {
  await page.goto("/client/1");
  await expect(page.getByText(/cases/)).toBeVisible();
});

test("'payments' text is visible in individual client page", async ({
  page,
}) => {
  await page.goto("/client/1");
  await expect(page.getByText(/payments/)).toBeVisible();
});
