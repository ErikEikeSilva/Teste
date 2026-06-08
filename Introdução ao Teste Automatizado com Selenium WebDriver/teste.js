const { Builder, By } = require("selenium-webdriver");

async function testeLogin(){

    let driver = await new Builder().forBrowser("chrome").build();

    try{

        await driver.get("file:///C:/Users/Hudson%20Neves/SistemadeLogin-WebDriver/index.html");

        await driver.findElement(By.id("usuario")).sendKeys("admin");

        await driver.findElement(By.id("senha")).sendKeys("123");

        await driver.findElement(By.tagName("button")).click();

        await driver.sleep(2000);

        let mensagem = await driver.findElement(By.id("mensagem")).getText();

        console.log("Resultado:", mensagem);

    }catch(erro){

        console.log("Erro:", erro);

    }finally{

        await driver.quit();

    }

}

testeLogin();