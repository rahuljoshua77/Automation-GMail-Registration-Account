const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const randomName = require('random-name');
const fsa = require("async-file");
puppeteer.use(StealthPlugin())
const get = require('readline-sync')

const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin({ blockTrackers: true }))



;(async () => {
  try{
      const browser = await puppeteer.launch({
      headless: false,
      ignoreHTTPSErrors: true,
      slowMo: 0,
      args: ['--window-size=1400,900',
      '--remote-debugging-port=9222',
      "--remote-debugging-address=0.0.0.0", // You know what your doing?
      '--disable-gpu', "--disable-features=IsolateOrigins,site-per-process", '--blink-settings=imagesEnabled=true'
      ]})
      const page = await browser.newPage()
      let firstName = randomName.first().toString()
      let lastName = randomName.last().toString()
      let numbers = Math.floor(Math.random() * 1000);
      let userName = randomName.first().toString() + randomName.last().toString() + numbers 
      const passWord = "RJDxSGB123ok"
      await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp')
      
      await page.waitForTimeout(5000)
      console.log("[*] Google Mail Automation Registration Account");
      console.log("[*] Author: RJD");
      await page.setViewport({ width: 1366, height: 695 })
      console.log("[*] Trying to Fill Identity (with random identity)");

      await page.waitForSelector('.rFrNMe #firstName')
      await page.click('.rFrNMe #firstName')
      await page.type('.rFrNMe #firstName', `${firstName}`);
      
      await page.type('.rFrNMe #lastName',`${lastName}`);
      
      await page.waitForSelector('.rFrNMe #username')
      await page.type('.rFrNMe #username', `${userName}`)
      
      await page.waitForSelector('#passwd > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      await page.type('#passwd > .aCsJod > .aXBtI > .Xb9hP > .whsOnd',`${passWord}`)

      await page.waitForSelector('#confirm-passwd > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      await page.type('#confirm-passwd > .aCsJod > .aXBtI > .Xb9hP > .whsOnd',`${passWord}`)

      console.log("[*] Process to Verification by OTP");

      await page.waitForSelector('.qhFLie > #accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
      await page.click('.qhFLie > #accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
      
      await page.waitForTimeout(5000)
       
      let number = get.question("[*] Number Phone: ")
      await page.waitForSelector('#phoneNumberId')
      const input = await page.$('#phoneNumberId');
      await input.click({ clickCount: 3 })
      await page.keyboard.press('Backspace');
      await page.type('#phoneNumberId',`${number}`)

      await page.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.qhFLie > div > div > button > div.VfPpkd-RLmnJb')
        
      await page.waitForSelector('#code').then(() => {
        
          ;(async () => {
          await page.waitForSelector('#code')
          let otp = get.question("[*] Code OTP: ")
          await page.type('#code',`${otp}`)
          await page.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div.dG5hZc > div.qhFLie > div > div > button > div.VfPpkd-RLmnJb')
          
          await page.waitForTimeout(2000)
          await page.waitForSelector('.F8Czgd #month').then(() => {
            ;(async () => {
            await page.click('.F8Czgd #month')
            await page.select('.F8Czgd #month', '2')    
            await page.waitForSelector('.F8Czgd #month')
            await page.click('.F8Czgd #month')

            await page.waitForSelector('#day')
            await page.type('#day', '22')

            await page.waitForSelector('.rFrNMe #year')
            await page.type('.rFrNMe #year','1992')
            
            await page.waitForSelector('.ZyruUe #gender')
            await page.click('.ZyruUe #gender')
            
            await page.select('.ZyruUe #gender', '1')
            
            await page.waitForSelector('.ZyruUe #gender')
            await page.click('.ZyruUe #gender')
            
            await page.waitForSelector('.qhFLie > .FliLIb > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
            await page.click('.qhFLie > .FliLIb > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb')
            
            await page.waitForTimeout(5000)
            await page.waitForSelector('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div.dG5hZc > div.daaWTb > div > div > button > div.VfPpkd-RLmnJb')
            await page.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div.dG5hZc > div.daaWTb > div > div > button > div.VfPpkd-RLmnJb').then(() => {
              ;(async () => {

              
              let finishTime = new Date().getTime() + ( 10 * 1000);

              await autoScroll(page, finishTime); 
              await page.waitForTimeout(10000)
             
              await page.waitForSelector('#termsofserviceNext > div.ZFr60d.CeoRYc')
              await page.click('#termsofserviceNext > div.ZFr60d.CeoRYc')
              
              console.log(`[*] Success: ${userName}|${passWord} | Result saved! resultSuccess.txt`);
        
              fsa.appendFile("resultSuccess.txt", `${userName}|${passWord}\n`, {encoding: 'utf8'});
              browser.close()
            })()}).catch(e => {
                console.log(`[*] Automation is Failed, Run again!`)
                browser.close()
              });
                       
            })()}).catch(e => {
           
              console.log(`[*] OTP is Wrong`)
              browser.close()
    
            })
          
          })()
      }).catch(e => {
      
        console.log(`[*] Check your Phone Number or It's Used Too Many Times!`)
        browser.close()
      }); 
      }
    
    catch(e){
      console.log("[*] Error to Open URL")
    
    }
})()

async function autoScroll(page, finishTime){
  await page.evaluate(async (finishTime) => {

      await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight || new Date().getTime() > finishTime){

                  clearInterval(timer);
                  resolve();
              }

          }, 120);
      });
  }, finishTime);
}