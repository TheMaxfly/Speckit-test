import { test, expect } from "@playwright/test";

test("keyboard can reach primary navigation", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();

  await page.keyboard.press("Tab");
  const focused = page.locator(":focus");
  await expect(focused).toBeVisible();
  const isInsideHeader = await focused.evaluate((el) =>
    Boolean(el.closest("header")),
  );
  expect(isInsideHeader).toBe(true);
});
