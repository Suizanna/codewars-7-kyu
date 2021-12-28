// Return the type of the sum of the two arguments.

function typeOfSum(a, b) {
  let result = a + b;
  return typeof result;
}

console.log(typeOfSum(12, 1)); //'number'
console.log(typeOfSum("d", 1)); // 'string'
console.log(typeOfSum(1, "a")); //'string'
console.log(typeOfSum(true, 1)); //'number'

//
// const typeOfSum = (a, b) => typeof (a + b);
