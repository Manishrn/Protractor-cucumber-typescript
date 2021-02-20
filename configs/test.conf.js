var merge = require('merge')
var basicconfig = require('./protractor.basic.conf')


module.exports = merge(true,basicconfig, {
  baseUrl: 'https://classic.crmpro.com/',
  SELENIUM_PROMISE_MANAGER: false,
  params: {
    uploadTestResults:false,
    database: {
      'server': '',      
      'driver': 'msnodesqlv8',
      'options': {
        'trustedConnection': 'true'
      }
    }
  }
});

