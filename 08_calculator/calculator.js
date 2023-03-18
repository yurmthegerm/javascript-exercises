const add = function(a, b) {
  b = b || 0; //optional param
  const numO = parseInt(a);
  const numT = parseInt(b);
  const sum = numO + numT;
	return sum;
};

const subtract = function(a,b) {
	const numO = parseInt(a);
  const numT = parseInt(b);
  const sub = numO-numT;
	return sub;
};

const sum = function(a) {
  /*
	let result = 0; 
  if (Array.isArray(a)) { //if a is an array
    if (a.length > 0) { //if a stores any value
      for (let i = 0; i < a.length; i++) {
        result += parseInt(a[i]); //add all elems to sum
      }
    } else { //if a is an empty array
      return result; 
    }
  }
  return result;
  */
  return a.reduce((total, current) => total+current, 0);
};

const multiply = function(a) {
  /*
  let result = 1;
  for (let i = 0; i < a.length; i++) {
    result *= a[i];
  }
  return result;
  */
  return a.length 
    ? a.reduce((total, current) => total * current)
    : 0;
};

const power = function(a,b) {
	return (a**b);
};

const factorial = function(a) {
	let num = parseInt(a);
  let result = 1;
  let count = num;
  if (num != 1 && num != 0) {
    while (count != 0) {
      result *= num;
      num --;
      count --;
    }
  }
  return result;
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
