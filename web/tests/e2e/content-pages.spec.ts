import { test, expect } from "@playwright/test";

test("about and faq pages render headings", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "The show" })).toBeVisible();

  await page.goto("/faq");
  await expect(page.getByRole("heading", { name: "FAQ" })).toBeVisible();
  await expect(
    page.getByText("Is this pulling from a real podcast feed?"),
  ).toBeVisible();
});
