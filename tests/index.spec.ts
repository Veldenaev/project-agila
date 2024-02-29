import { test, expect } from "@playwright/test";

test("has title 'Project Agila'", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/^Project Agila$/);
});

test("has subtitle", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText("Empowering transactions between clients and lawyers."),
  ).toBeVisible();
});
