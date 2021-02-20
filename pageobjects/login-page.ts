import { by, element, ElementFinder } from "protractor";

export class LoginPage{

   //Locators area
   public txt_user_name: ElementFinder = element(by.xpath('//*[@id="loginForm"]/div/input[1]'));
   public txt_password: ElementFinder = element(by.xpath('//*[@id="loginForm"]/div/input[1]'));   
   public btn_login: ElementFinder = element(by.xpath(''));


   //Functionlity on login page
    async  login(username: string, password: string) {
       await this.txt_user_name.sendKeys(username);
       await this.txt_password.sendKeys(password);
       
   }

    async clickBtn(){
    await this.btn_login.click();
   }
}