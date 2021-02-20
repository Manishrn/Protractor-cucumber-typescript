import { After, Before } from "@cucumber/cucumber";
import { browser } from "protractor";
import { Constant } from "../utils/constants";

var testenv = require('../configs/test.conf');
var prodenv = require('../configs/prod.conf');

Before(() => {    
  browser.waitForAngularEnabled(false);
    if(Constant.ENVIRONMENT==='test')
    {
      console.log(testenv.baseUrl);      
      browser.get(testenv.baseUrl);
    }
    else if(Constant.ENVIRONMENT==='prod')
    {
      console.log(prodenv.baseUrl);
      browser.get(prodenv.baseUrl);
    }
    
  
  });

After(()=>{
  console.log('In after hook');  

  });