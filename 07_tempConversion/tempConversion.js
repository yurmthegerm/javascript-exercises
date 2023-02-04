const convertToCelsius = function(deg) {
  return Math.round(((deg-32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(deg) {
  return Math.round(((deg * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
