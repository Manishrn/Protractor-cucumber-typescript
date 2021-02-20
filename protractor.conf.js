exports.config = {
  params: {
    environment: "lde",
    testPlan: "323585",
    testSuite: "556372",
    testConfiguration: "HIS2.0 CL2",
    uploadTestToTFS: false,
  },
};

var env = process.env.npm_config_params_environment;
var testPlan = process.env.npm_config_params_testPlan;
var testSuite = process.env.npm_config_params_testSuite;
var testConfiguration = process.env.npm_config_params_testConfiguration;
var uploadTests = process.env.npm_config_params_uploadTestToTFS;

console.log("running an environment " + env);
console.log("Test plan Id " + testPlan);
console.log("Test suite Id " + testSuite);
console.log("Test configuration  " + testConfiguration);
console.log("Test result update flag " + uploadTests);

//If environment is not specified from command line.
if (env === undefined) {
  env = this.config.params.environment;
}


switch (env) {
    case "prod":
      exports.config = require("./configs/prod.conf");
      console.log("Running tests using " + env + " configurations");
      break;
  
    case "test":
      exports.config = require("./configs/test.conf");
      console.log("Running tests using " + env + " configurations");
      break;

      default:    
    console.log("Running tests using " + env + " configurations");
    break;
}  