const add = function(a,b) {
	return a+b;
  
};

const subtract = function(a,b) {
	/*let numbers = Array.from(arguments);
  let subNums = numbers.reduce((previousValue, currentValue) => {    
    previousValue - currentValue}); */
  return a-b;
};

const sum = function(args) {
  let sum = 0;
  function myFunction(item) {
    sum += item;
  }
  args.forEach(myFunction);
	return sum;
};

const multiply = function(args) {
  return args.reduce((previousValue, currentValue) => previousValue * currentValue);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let factor = a;
  if (a === 0 || a === 1) {
    return 1;
  } else {
    for (a; a>=2; a--){
      factor = factor * (a-1);

    }
  } return factor;
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
