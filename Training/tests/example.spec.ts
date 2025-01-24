import { test, expect, Browser, chromium, firefox } from '@playwright/test';

// test('How to Create Broswer', async ({ page }) => {
//         await page.pause();
//         const chromiumBrowser: Browser= await chromium.launch({headless:false}) ;
//         const chrominumContext=await chromiumBrowser.newContext();
//         const chrominumContext2=await chromiumBrowser.newContext();
//         const chromiumPage1= await chrominumContext.newPage();
//         const chromiumPage2= await chrominumContext2.newPage();
//         await page.pause();
//         await chromiumPage1.goto("http://www.google.co.in");
//         const firefoxBrowser: Browser= await firefox.launch({headless:false}) ;
//         const firefoxContext=await firefoxBrowser.newContext();
//         const firefoxPage1= await firefoxContext.newPage();
//         await page.pause();
//         await chromiumPage1.goto("http://www.google.co.in");//erp
//         await firefoxPage1.goto("http://www.google.co.in"); //crm

//         let name=await chromiumPage1.locator("[input account name]").textContent();
//         await expect(chromiumPage2.locator('[erp account]')).toBe(name)
//   });

//   test('Get Cookies', async ({ page }) => {
//     const chromiumBrowser: Browser= await chromium.launch({headless:false}) ;
//     const chrominumContext=await chromiumBrowser.newContext();
//     const chromiumPage1= await chrominumContext.newPage();
//     await chromiumPage1.goto("http://www.google.co.in");
//     const cookiesPage1= await chrominumContext.cookies("http://www.google.co.in");
//     console.log('Cookies '+cookiesPage1)
//     console.log('Cookies:', JSON.stringify(cookiesPage1, null, 2));
//   });


  // test('Set Cookies', async ({ page }) => {
  //   const chromiumBrowser: Browser= await chromium.launch({headless:false}) ;
  //   const chrominumContext=await chromiumBrowser.newContext();
  //   const chromiumPage1= await chrominumContext.newPage();
  //   await chromiumPage1.goto("https://codepen.io/grapdroad/pen/XWEwJGr");
  //   await chrominumContext.addCookies([
  //     {
  //       "name": "__cfruid",
  //       "value": "e10eb63aae471575fc9191039980bb1e1b6010c5-1733731832",
  //       "domain": ".codepen.io",
  //       "path": "/",
  //       "expires": -1,
  //       "httpOnly": true,
  //       "secure": true,
  //       "sameSite": "None"
  //     },
  //   ])
  //   await page.pause();
  // });

//   test('Clearing Cookies', async ({ page }) => {
//     const chromiumBrowser: Browser= await chromium.launch({headless:false}) ;
//     const chrominumContext=await chromiumBrowser.newContext();
//     const chromiumPage1= await chrominumContext.newPage();
//     await chromiumPage1.goto("http://www.google.co.in");
//     await chrominumContext.clearCookies();
//   });

// test('Get Session Storage', async ({ page }) => {
//     const chromiumBrowser: Browser= await chromium.launch({headless:false}) ;
//     const chrominumContext=await chromiumBrowser.newContext();
//     const chromiumPage1= await chrominumContext.newPage();
//     await chromiumPage1.goto("http://www.google.co.in");
    
//     const sessiondata=await chromiumPage1.evaluate(()=>{
//         return sessionStorage.getItem('key')
//     })
//     console.log(sessiondata)
//   });

  test('New window', async ({ page }) => {
    // const browser = await chromium.launch({ headless: false });
    // const context = await browser.newContext({ storageState: '/Users/sureka.mariyan/Desktop/Training/auth.json' });
    // const page = await context.newPage();
    // await page.goto('https://codepen.io/grapdroad/pen/XWEwJGr');
    // console.log('Session storage loaded');
    // await page.pause();
    // let value=await page.locator('name=[id]').click();
    // await expect(value).toBe("123")
    // await expect(page.locator('button')).toBeEditable();
    // await expect(page.locator('')).not.toBe("Suganya")
    // await expect(page.locator('')).toBeFalsy();
    // await expect(15).toBeGreaterThan(13);
    // await expect(page.locator('')).toBeVisible()
    // await expect(page.locator('')).toBeEnabled();
    // await expect(page.locator('')).toBeDisabled();
    // await expect(page.locator('')).toBeHidden();
    // await expect(page.locator('')).toHaveText('');
    // await expect(page.locator('')).not.toBeChecked();
      // Use the provided start date or default to the current date
      const initialDate = await new Date();
      
      // Add the duration in years
      const calculatedDate = new Date(initialDate);
      calculatedDate.setFullYear(Number(initialDate.getFullYear()) +Number(2));
      console.log(calculatedDate)
    
  });


