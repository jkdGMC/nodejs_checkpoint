var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var strArray = buf.toString().split('\n');

console.log(strArray.length - 1);