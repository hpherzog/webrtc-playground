
var resolve = require('./util').resolve;
var spawn = require('child_process').spawn;

spawn(resolve('./node_modules/.bin/webdriver-manager'), ['start'], {
    detached: true,
    stdio: 'inherit'
});
