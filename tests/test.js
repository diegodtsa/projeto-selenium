const {Builder, By} = require("selenium-webdriver");
const assert = require("chai").assert

describe('Login Tests', async function(){

    let driver;

    beforeEach(async function(){
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
    });

    afterEach(async function(){
        await driver.quit()

    });

    
    it('Login realizado com sucesso', async function(){
        
        const campoLogin = await driver.findElement(By.id("user-name"))
        const campoPassword = await driver.findElement(By.id("password"))
        const botaoLogin = await driver.findElement(By.id("login-button"))

        await campoLogin.sendKeys('standard_user')
        await campoPassword.sendKeys('secret_sauce')
        await botaoLogin.click()

        const title = await driver.findElement(By.className('title')).getText()
        assert.equal('Products', title)

    });

    it('Login de um usuário com problema', async function(){
        
        const campoLogin = await driver.findElement(By.id("user-name"))
        const campoPassword = await driver.findElement(By.id("password"))
        const botaoLogin = await driver.findElement(By.id("login-button"))

        await campoLogin.sendKeys('problem_user')
        await campoPassword.sendKeys('secret_sauce')
        await botaoLogin.click()

        const title = await driver.findElement(By.className('title')).getText()
        assert.equal('Products', title)

    });

    it('Login senha vazia', async function(){
        
        const campoLogin = await driver.findElement(By.id("user-name"))
        const campoPassword = await driver.findElement(By.id("password"))
        const botaoLogin = await driver.findElement(By.id("login-button"))

        await campoLogin.sendKeys('problem_user')
        await botaoLogin.click()

        const errorComponent = await driver.findElement(By.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3')).getText()
        const resultadoObtido
        assert.equal('Products', title)

    });


});
