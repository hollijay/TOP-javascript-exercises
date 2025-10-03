const convertToCelsius = function(temp) {
  cel= ((temp-32) * (5/9))
  return Number(cel.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  far = ((temp*9/5) + 32)
  return Number(far.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
