var program = require('commander');
var format = require('./lib/formatjson');
// test file
program.version('0.0.1').usage('<file>').parse(process.argv);

console.log('args: %j', program.args);
var intputFilename = program.args[0];
format.format(intputFilename);
