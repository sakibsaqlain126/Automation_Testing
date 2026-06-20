import { test, expect } from '@playwright/test';

// open and login 
test
// youtube summary 
test
// drive summary 
test 
test('test', async ({ page }) => {

  await page.goto('https://web.tubeonai.com/login')
  await page.pause()
  await page.getByRole('button', { name: 'Continue with email & password' }).click()
  await page.pause()
  await page.getByRole('textbox', { name: 'Email*' }).fill('sakib00007777@gmail.com')
  await page.getByRole('textbox', { name: 'Password*' }).fill('123456789')
  await page.getByTestId('login-submit-button').click()

  // await page.getByRole('textbox', { name: 'Search Youtube or Paste any' }).fill('https://www.youtube.com/watch?v=HC2IaW3DAfQ')


  //  await page.getByTestId('summary-tool-url-input').fill('https://www.bbc.com/worklife/article/20190319-the-art-of-perseverance-how-gaman-defined-japan')
  //  await page.getByTestId('summary-tool-generate-button').click()

  //  await page.getByRole('link', { name: ' Summaries' }).click()
  //  await page.getByRole('link', { name: ' Channels' }).click()
  //  await page.getByRole('menuitem', { name: ' Profile' }).click()

  //  await page.locator('div').filter({ hasText: /^Drag and drop your file here or click here to upload$/ }).nth(1).setInputFiles('Question 1.pdf')
  //  await page.goto('https://web.tubeonai.com/summaries/9fedccfb-33ed-4325-b939-0ae4967b0c5b?detail_level=Comprehensive&tone=Neutral')

  // await page.getByRole('link', { name: ' Summarize Content' }).click()
  // await page.getByRole('button', { name: 'Show More' }).click()
  // await page.getByTestId('summary').click()
  // await page.getByTestId('summary-tool-url-input').click()
  // await page.getByTestId('summary-tool-url-input').fill('https://salesforcefaqs.com/create-public-link-to-share-files-in-salesforce/')

  // await page.goto('https://web.tubeonai.com/settings/usage-history');


  await page.getByTestId('summary-tool-url-input').click();
  await page.getByTestId('summary-tool-url-input').fill('https://learnenglish.britishcouncil.org/general-english/magazine-zone');
  await page.getByTestId('summary-tool-generate-button').click();
    


  
});
