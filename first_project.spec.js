import { test, expect } from '@playwright/test';


async function login(page) {
  await page.goto('https://web.tubeonai.com/login?next=%2F');
  await page.getByRole('button', { name: 'Continue with email & password' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('sakib00007777@gmail.com');
  await page.getByRole('textbox', { name: 'Password*' }).fill('123456789');
  await page.getByTestId('login-submit-button').click();
}


async function articleSummary(page) {
  await page.getByTestId('article-summary-tool').click();
  await page.getByTestId('summary-tool-url-input').fill(
    'https://helenadailyenglish.com/101-short-stories-for-learning-english-beginner-to-advanced-level-text-audio-and-video'
  );
  await page.getByTestId('summary-tool-generate-button').click();

}


async function podcastSummary(page) {
  await page.getByRole('link', { name: ' Summarize Content' }).click();
  await page.getByRole('button', { name: 'Show More' }).click();
  await page.getByTestId('podcast-summary-tool').click();
  await page.getByTestId('summary-tool-url-input').fill(
    'https://www.thepodcasthost.com/listening/what-is-a-podcast/'
  );
  await page.getByTestId('summary-tool-generate-button').click();
  await page.getByTestId('summary-tab').click();
}


async function publicLinkSummary(page) {
  await page.getByTestId('summary').click();
  await page.getByTestId('summary-tool-url-input').fill(
    'https://paragraphwizard.com/mobile-phone-paragraph/'
  );
  await page.getByTestId('summary-tool-generate-button').click();
}



test('Public Link Summary', async ({ page }) => {
  await login(page);
  await publicLinkSummary(page);
});


test('Podcast Summary', async ({ page }) => {
  await login(page);
  await podcastSummary(page);
});


test('Article Summary', async ({ page }) => {
  await login(page);
  await articleSummary(page);
});


