import { test, expect } from '@playwright/test';

// 🔹 Login function
async function login(page) {
  await page.goto('https://web.tubeonai.com/login?next=%2F');
  await page.pause();
  await page.waitForSelector('button:has-text("Continue with email & password")', { state: 'visible' });
  await page.getByRole('button', { name: 'Continue with email & password' }).click();
  
  //await page.waitForSelector('[name="Email*"]', { state: 'visible' });
  await page.getByRole('textbox', { name: 'Email*' }).fill('sakib00007777@gmail.com');

  await page.waitForSelector('[name="Password*"]', { state: 'visible' });
  await page.getByRole('textbox', { name: 'Password*' }).fill('123456789');

  await page.getByTestId('login-submit-button').click();

  // Pause to verify login worked
  await page.pause();
}

// 🔹 Article Summary flow
async function articleSummary(page) {
  await page.waitForSelector('[data-testid="article-summary-tool"]', { state: 'visible' });
  await page.getByTestId('article-summary-tool').click();

  await page.waitForSelector('[data-testid="summary-tool-url-input"]', { state: 'visible' });
  await page.getByTestId('summary-tool-url-input').fill(
    'https://helenadailyenglish.com/101-short-stories-for-learning-english-beginner-to-advanced-level-text-audio-and-video'
  );

  await page.getByTestId('summary-tool-generate-button').click();

  // Pause to confirm article summary generated
  await page.pause();
}

// 🔹 Podcast Summary flow
async function podcastSummary(page) {
  await page.waitForSelector('a:has-text("Summarize Content")', { state: 'visible' });
  await page.getByRole('link', { name: ' Summarize Content' }).click();

  await page.waitForSelector('button:has-text("Show More")', { state: 'visible' });
  await page.getByRole('button', { name: 'Show More' }).click();

  await page.waitForSelector('[data-testid="podcast-summary-tool"]', { state: 'visible' });
  await page.getByTestId('podcast-summary-tool').click();

  await page.waitForSelector('[data-testid="summary-tool-url-input"]', { state: 'visible' });
  await page.getByTestId('summary-tool-url-input').fill(
    'https://www.thepodcasthost.com/listening/what-is-a-podcast/'
  );

  await page.getByTestId('summary-tool-generate-button').click();

  await page.waitForSelector('[data-testid="summary-tab"]', { state: 'visible' });
  await page.getByTestId('summary-tab').click();

  // Pause to confirm podcast summary generated
  await page.pause();
}

// 🔹 Public Link Summary flow
async function publicLinkSummary(page) {
  await page.waitForSelector('[data-testid="summary"]', { state: 'visible' });
  await page.getByTestId('summary').click();

  await page.waitForSelector('[data-testid="summary-tool-url-input"]', { state: 'visible' });
  await page.getByTestId('summary-tool-url-input').fill(
    'https://paragraphwizard.com/mobile-phone-paragraph/'
  );

  await page.getByTestId('summary-tool-generate-button').click();

  // Pause to confirm public link summary generated
  await page.pause();
}

// 🔹 Combined flow (Login + All Summaries)
async function runAllSummaries(page) {
  await login(page);
  await publicLinkSummary(page);
  await articleSummary(page);
  await podcastSummary(page);
}

// ================== TESTS ==================

// ✅ Run only login + Public Link
test('Public Link Summary', async ({ page }) => {
  await login(page);
  await publicLinkSummary(page);
});

// ✅ Run only login + Podcast
test('Podcast Summary', async ({ page }) => {
  await login(page);
  await podcastSummary(page);
});

// ✅ Run only login + Article
test('Article Summary', async ({ page }) => {
  await login(page);
  await articleSummary(page);
});

// ✅ Run login + all flows in sequence
test('Run All Summaries', async ({ page }) => {
  await runAllSummaries(page);
});
