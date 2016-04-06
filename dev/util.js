
var path = require('path');

module.exports.resolve = function resolve(bin){
    return /^win/.test(process.platform)? path.resolve(bin + '.cmd') : '';
}
