// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const { setupDriver } = require('../utils/webdriver');


describe('Test 1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test 1', async function() {
    await driver.get("https://demo.testim.io/")
    const assert = require('assert')
    const pageTitle = await driver.getTitle();
    if (pageTitle === "Space & Beyond | Testim.io demo") {
      await driver.executeScript("alert('El assert es correcto. El título es: " + pageTitle + "');")
      await driver.sleep(2000);
    }else{
      await driver.executeScript("alert('El assert no es correcto. El título es: " + pageTitle + "');")
      await driver.sleep(2000);
    }
    const alert = await driver.switchTo().alert();
    await alert.accept();
    const assert2 = await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[2]/div[4]/div/div/div[1]/div[2]/div/h5")).getText();
    if (assert2 === "Madan") {
      await driver.executeScript("alert('El assert es correcto. El texto es: " + assert2 + "');")
      await driver.sleep(2000);
    }else{
      await driver.executeScript("alert('El assert no es correcto. El texto es: " + assert2 + "');")
      await driver.sleep(2000);
    }
    const alert1 = await driver.switchTo().alert();
    await alert1.accept();
    await driver.sleep(2000);   
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[1]/div[3]/div/div[1]/div/div")).click()
    await driver.sleep(2000);
    await driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div/span/div/div[2]/div[28]")).click()
    await driver.sleep(2000);
    await driver.findElement(By.css(".theme__button___3HGWm:nth-child(2)")).click()
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//div[@id=\"app\"]/div/section/div[3]/div/div[3]")).click()
    await driver.findElement(By.css(".theme__active___31xyK li:nth-child(3)")).click()
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[1]/div[3]/div/div[4]/div/input")).click()
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[1]/div[3]/div/div[4]/ul/li[2]")).click()   
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[2]/div[3]/div/div/div[2]/div")).click()
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[2]/div[3]/div/div/div[2]/ul/li[4]")).click()
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[2]/div[3]/div/div/div[2]/div")).click()
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[2]/div[3]/div/div/div[2]/ul/li[4]")).click()
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[2]/div[4]/div/div/div[2]/div[4]/button")).click()
    await driver.sleep(2000);
    assert(await driver.findElement(By.xpath("//*[@id=\"app\"]/div/section[2]/div[4]/div/div/div[2]/div[4]/button")).getText() == "BOOKED")
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[1]/form/div[1]/input")).sendKeys("Rafael")
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[1]/form/div[2]/input")).sendKeys("martincandilejo@hotmail.com")
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[1]/form/div[3]/input")).sendKeys("111-11-1111")
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[1]/form/div[4]/input")).sendKeys("2124567890")
    await driver.sleep(2000);
    await driver.findElement(By.css("input:nth-child(2)")).sendKeys("C:\\logic\\logic.png")
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[2]/div[4]/div[1]/div/input")).sendKeys("30076")
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[2]/div[4]/div[2]/button")).click()
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[2]/div[5]/div/label/div")).click()
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/section[1]/div[3]/div[2]/div[7]/div/button")).click()
    await driver.sleep(2000);
    })
})




