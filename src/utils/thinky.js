const cfg = require("../config/database.js");
console.log(cfg);
var thinky = require("thinky")(cfg);

module.exports = thinky;
