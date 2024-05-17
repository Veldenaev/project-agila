import { test, expect } from "@playwright/test";

test("has 'All Clients' in title", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page).toHaveTitle(/All Clients/);
});

test("has heading", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page.getByText(/Accounts/)).toBeVisible();
});

test("has table", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page.locator("table").first()).toBeVisible();
});

test("'Add' button is visible", async ({ page }) => {
  await page.goto("/client/all");
  await expect(page.getByRole("link", { name: /Add/ }).first()).toBeVisible();
});

// test("'Add Payment' button is visible", async ({ page }) => {
//   await page.goto("/client/all");
//   await expect(page.getByRole("link", { name: /Add Payment/ }).first()).toBeVisible();
// });

test("'Logout' button is visible", async ({ page }) => {
  await page.goto("/client/all");
  await expect(
    page.getByRole("button", { name: /Logout/ }).first(),
  ).toBeVisible();
});

test("Clicking 'Add' button leads to client addition page", async ({ page }) => {
  await page.goto("/client/all");
  await page.getByRole("link", { name: /Add/ }).first().click();
  await expect(page).toHaveURL(/client\/new/);
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
  await page.goto("/client/26400");
  await expect(page).toHaveTitle(/Dashboard/);
});

test("individual client page has table", async ({ page }) => {
  await page.goto("/client/26400");
  await expect(page.locator("table").first()).toBeVisible();
});

test("'Edit' button is visible in individual client page", async ({ page }) => {
  await page.goto("/client/26400");
  await expect(page.getByRole("button", { name: /Edit/ }).first()).toBeVisible();
});

test("'Delete' button is visible in individual client page", async ({
  page,
}) => {
  await page.goto("/client/26400");
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
  await page.goto("/client/26400");
  await expect(page.getByText(/cases/)).toBeVisible();
});

test("'payments' text is visible in individual client page", async ({
  page,
}) => {
  await page.goto("/client/26400");
  await expect(page.getByText(/payments/)).toBeVisible();
});

test("individual client page has 'Dashboard' in title 2", async ({ page }) => {
  await page.goto("/client/12825");
  await expect(page).toHaveTitle(/Dashboard/);
});

test("individual client page has table 2", async ({ page }) => {
  await page.goto("/client/12825");
  await expect(page.locator("table").first()).toBeVisible();
});

test("'Edit' button is visible in individual client page 2", async ({ page }) => {
  await page.goto("/client/12825");
  await expect(
    page.getByRole("button", { name: /Edit/ }).first(),
  ).toBeVisible();
});

test("'Delete' button is visible in individual client page 2", async ({
  page,
}) => {
  await page.goto("/client/12825");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});

test("'cases' text is visible in individual client page 2", async ({ page }) => {
  await page.goto("/client/12825");
  await expect(page.getByText(/cases/)).toBeVisible();
});

test("'payments' text is visible in individual client page 2", async ({
  page,
}) => {
  await page.goto("/client/12825");
  await expect(page.getByText(/payments/)).toBeVisible();
});

test("individual client page has 'Dashboard' in title 3", async ({ page }) => {
  await page.goto("/client/11442");
  await expect(page).toHaveTitle(/Dashboard/);
});

test("individual client page has table 3", async ({ page }) => {
  await page.goto("/client/11442");
  await expect(page.locator("table").first()).toBeVisible();
});

test("'Edit' button is visible in individual client page 3", async ({
  page,
}) => {
  await page.goto("/client/11442");
  await expect(
    page.getByRole("button", { name: /Edit/ }).first(),
  ).toBeVisible();
});

test("'Delete' button is visible in individual client page 3", async ({
  page,
}) => {
  await page.goto("/client/11442");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});

test("'cases' text is visible in individual client page 3", async ({
  page,
}) => {
  await page.goto("/client/11442");
  await expect(page.getByText(/cases/)).toBeVisible();
});

test("'payments' text is visible in individual client page 3", async ({
  page,
}) => {
  await page.goto("/client/11442");
  await expect(page.getByText(/payments/)).toBeVisible();
});