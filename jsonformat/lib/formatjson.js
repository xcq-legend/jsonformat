var rf = require("fs");
var formatjson = function() {
};

var format = function(intputFilename, callback) {
	console.log("format " + intputFilename);
	var data = rf.readFileSync(intputFilename, "utf-8");
	var config = eval(data);

	var result = JSON.stringify(config, null, 4);
	rf.writeFileSync(intputFilename, result);
	console.log("success write to " + intputFilename);
};

module.exports = formatjson;
module.exports.format = format;
