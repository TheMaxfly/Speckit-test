import { test, expect } from "@playwright/test";

test("episodes page renders 20 episodes with audio controls", async ({
  page,
}) => {
  await page.goto("/episodes");

  await expect(page.getByRole("heading", { name: "Episodes" })).toBeVisible();

  const episodeTitles = page.locator("h2");
  await expect(episodeTitles).toHaveCount(20);

  const audioPlayers = page.locator("audio");
  await expect(audioPlayers.first()).toHaveAttribute("controls", "");
});
