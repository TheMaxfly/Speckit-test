import { test, expect } from "@playwright/test";

test("primary navigation routes work", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Episodes" })).toBeVisible();
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  await expect(page.getByRole("link", { name: "FAQ" })).toBeVisible();

  await page.getByRole("link", { name: "Episodes" }).click();
  await expect(page).toHaveURL(/\/episodes\/?$/);

  await page.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about\/?$/);

  await page.getByRole("link", { name: "FAQ" }).click();
  await expect(page).toHaveURL(/\/faq\/?$/);

  await page.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL(/\/$/);
});
