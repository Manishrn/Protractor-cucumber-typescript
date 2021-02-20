
module.exports = {
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  directConnect: true,
  specs: ["features/**/*.feature"],
  onPrepare: () => {
    console.log("On Prepare");     
        browser.manage().window().maximize();
},
  cucumberOpts: {
    require: [
      // loads step definitions:
      "stepdefinitions/**/*.ts",
      "core/**/*.ts",
      "pageobject/*.ts"
    ],
    "require-module": ["ts-node/register"],    
    tags: ['@FirstTest'], 
    format: "json:results.json",
    strict: false,
    
  },

  capabilities: {
    browserName: "chrome",    
    chromeOptions: {
      args: ["--incognito"],
      //args: ["--window-size=1920x1200"]
      args: ["--headless", "--window-size=1920x1200"]

    }
  },

  onComplete: () => {
    console.log("On Complete");
    var reporter = require('cucumber-html-reporter');
  var options = {
    theme: 'bootstrap',
    jsonFile: './results.json',
    output: './results.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "App Version":"0.0.1",
        "Environment": "Test",
        "Browser": "Chrome  88.0",
        "Platform": "Windows 10",        
        
    },
    output: './report/cucumber_report.html',
  };
   reporter.generate(options);
},
  

}