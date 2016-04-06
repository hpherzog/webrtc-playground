
var resolve = require('./util').resolve;
var spawn = require('child_process').spawn;

spawn(resolve('./node_modules/.bin/webpack-dev-server'), [], {
    detached: true,
    stdio: 'inherit'
});
