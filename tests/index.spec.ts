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
  await page.getByRole("link", { name: "Access as lawyer" }).click();
  await expect(page).toHaveURL("/lawyer/1");
});

test("'Access as admin (all cases)' button works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Access as admin (all cases)" }).click();
  await expect(page).toHaveURL("/case/all");
});

test("'Access as admin (all lawyers)' button works", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Access as admin (all lawyers)" })
    .click();
  await expect(page).toHaveURL("/lawyer/all");
});

test("'Access as admin (all clients)' button works", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Access as admin (all clients)" })
    .click();
  await expect(page).toHaveURL("/client/all");
});

test("'Access as client' button works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Access as client" }).click();
  await expect(page).toHaveURL("/client/1");
});
