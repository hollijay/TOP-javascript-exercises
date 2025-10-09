const add = function(val1, val2) {
  return(val1 + val2)
};

const subtract = function(val1, val2) {
  return(val1 -val2)
};

const sum = function(arr) {

	return (arr.reduce((accumulator,currentValue)=> accumulator + currentValue, 0) )
};

const multiply = function(arr) {
  return (arr.reduce((accumulator,currentValue)=> accumulator * currentValue, 1) )
};

const power = function(base, exponent) {
	return(base**exponent)
};

const factorial = function(n) {
	 
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}; 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
