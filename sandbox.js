var _ = require("underscore");

const weapons = ["candlestick", "lead pipe", "revolver"];

const broken = function(name) {
  return `broken ${name}`;
};

console.log(_.map(weapons, broken));
