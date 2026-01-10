import { test, expect } from "@playwright/test";

test("landing shows featured episode and audio controls", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText("Featured episode", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "The Future of Sound" }),
  ).toBeVisible();

  const audio = page.locator("audio").first();
  await expect(audio).toHaveAttribute("controls", "");
});
