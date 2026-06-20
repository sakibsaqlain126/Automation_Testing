import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {

   await page.goto('https://web.tubeonai.com/login?next=%2F');
   await page.pause();

  await page.getByRole('button', { name: 'Continue with email & password' }).click();
  await page.pause();

  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('sakib00007777@gmail.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('123456789');
  await page.getByTestId('login-submit-button').click();

   await page.pause();

   //article summary 
   await page.getByTestId('article-summary-tool').click();
//   await page.getByTestId('summary-tool-url-input').click();
  await page.getByTestId('summary-tool-url-input').fill('https://helenadailyenglish.com/101-short-stories-for-learning-english-beginner-to-advanced-level-text-audio-and-video');
  await page.getByTestId('summary-tool-generate-button').click();
  await page.goto('https://web.tubeonai.com/summaries/9feff385-08ef-4b12-9586-46e095343cbf?detail_level=Comprehensive&tone=Neutral');
   
  
//   //pdf summary 
//    await page.getByTestId('pdf-summary-tool').click();
//  // await page.getByText('click here').click();
//   await page.locator('div').filter({ hasText: /^Drag and drop your file here or click here to upload$/ }).nth(1).setInputFiles('E:\Thsis paper\bully');
//   await page.pause()
//   await page.getByTestId('summary-tool-generate-button').click();
//   //await page.goto('https://web.tubeonai.com/summaries/9ff001e6-05d1-4911-8106-209d20ecbd7b?detail_level=Comprehensive&tone=Neutral');

   //pdf summary 2

     
//   await page.getByTestId('pdf-summary-tool').click();
//   await page.locator('div').filter({ hasText: /^Drag and drop your file here or click here to upload$/ }).nth(1).setInputFiles('E:\playwight automation\bully.pdf');  
//   await page.pause();
//   await page.getByTestId('summary-tool-generate-button').click();



  //podcast summary 
   
    await page.getByRole('link', { name: ' Summarize Content' }).click();
  await page.getByRole('button', { name: 'Show More' }).click();
  await page.getByTestId('podcast-summary-tool').click();
  //await page.getByTestId('summary-tool-url-input').click();
  await page.getByTestId('summary-tool-url-input').fill('https://www.thepodcasthost.com/listening/what-is-a-podcast/');
  await page.getByTestId('summary-tool-generate-button').click();
  await page.pause();
  await page.getByTestId('summary-tab').click();
  await page.getByRole('textbox', { name: 'Ask question...' }).click();

  await page.getByRole('button', { name: ' Back' }).click();
  //public link summary 

   await page.getByTestId('summary').click();
  await page.getByTestId('summary-tool-url-input').click();
  await page.getByTestId('summary-tool-url-input').fill('https://paragraphwizard.com/mobile-phone-paragraph/');
  await page.getByTestId('summary-tool-generate-button').click();
  await page.pause();
   await page.getByRole('textbox', { name: 'Ask question...' }).click();



});
