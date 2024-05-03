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
  await expect(page.getByRole("link", { name: /View/ }).first()).toBeVisible();
});

test("'Delete' button is visible", async ({ page }) => {
  await page.goto("/case/all");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});

test("Clicking 'View' button leads to a case page", async ({ page }) => {
  await page.goto("/case/all");
  await page.getByRole("link", { name: /View/ }).first().click();
  await expect(page).toHaveURL(/case\/\d+/);
});

test("individual case page has 'Information' in title", async ({ page }) => {
  await page.goto("/case/1234");
  await expect(page).toHaveTitle(/Information/);
});

test("individual case page has table", async ({ page }) => {
  await page.goto("/case/1234");
  await expect(page.locator("table")).toBeVisible();
});

test("'Edit' button is visible in individual case page", async ({ page }) => {
  await page.goto("/case/1234");
  await expect(page.getByRole("link", { name: /Edit/ }).first()).toBeVisible();
});

test("'Delete' button is visible in individual case page", async ({ page }) => {
  await page.goto("/case/1234");
  await expect(
    page.getByRole("button", { name: /Delete/ }).first(),
  ).toBeVisible();
});

test("'Work Involved' text is visible in individual case page", async ({
  page,
}) => {
  await page.goto("/case/1234");
  await expect(page.getByText(/Work Involved/)).toBeVisible();
});

test("'Assigned Lawyers' text is visible in individual case page", async ({
  page,
}) => {
  await page.goto("/case/1234");
  await expect(page.getByText(/Assigned Lawyers/)).toBeVisible();
});
