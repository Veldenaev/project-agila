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
  await expect(page).toHaveURL("/accounts/0");
});

test("'Access as manager' button works", async ({ page }) => {
  await page.goto("/");
  await page.locator('a:text("Access as manager")').click();
  await expect(page).toHaveURL("/accounts/1");
});

test("'Access as client' button works", async ({ page }) => {
  await page.goto("/");
  await page.locator('a:text("Access as client")').click();
  await expect(page).toHaveURL("/cases/c_0");
});
