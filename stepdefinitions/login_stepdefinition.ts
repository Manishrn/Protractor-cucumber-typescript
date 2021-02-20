import { Given, setDefaultTimeout, When } from "@cucumber/cucumber";
import { LoginPage } from "../pageobjects/login-page";


let loginPage= new LoginPage();

setDefaultTimeout(80 * 1000);
Given(/^User lanches application$/,async ()=>{ 

   await loginPage.login('username','password') 

})

When(/^User start to crate a new schedule$/,async()=>{

    await loginPage.clickBtn(); 

 })

