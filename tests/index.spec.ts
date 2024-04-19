import { test, expect } from "@playwright/test";

test("has title 'Project Agila'", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/^Project Agila$/);
});

test("has subtitle", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText("Empowering billings for the law industry."),
  ).toBeVisible();
});

test("'Access as lawyer' button works", async ({ page }) => {
  await page.goto("/");
  await page.locator('a:text("Access as lawyer")').click();
  await expect(page).toHaveURL("/lawyer/1");
});

test("'Access as manager (all cases)' button works", async ({ page }) => {
  await page.goto("/");
  await page.locator('a:text("Access as manager (all cases)")').click();
  await expect(page).toHaveURL("/case/all");
});

test("'Access as manager (all lawyers)' button works", async ({ page }) => {
  await page.goto("/");
  await page.locator('a:text("Access as manager (all lawyers)")').click();
  await expect(page).toHaveURL("/lawyer/all");
});

test("'Access as manager (all clients)' button works", async ({ page }) => {
  await page.goto("/");
  await page.locator('a:text("Access as manager (all clients)")').click();
  await expect(page).toHaveURL("/client/all");
});

test("'Access as client' button works", async ({ page }) => {
  await page.goto("/");
  await page.locator('a:text("Access as client")').click();
  await expect(page).toHaveURL("/client/1");
});
