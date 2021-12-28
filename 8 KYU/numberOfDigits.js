// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.

//
function digits(n) {
  return n.toString().length;
}
digits(1234567); //7

//
function digits(n) {
  return String(n).length;
}

//
function digits(n) {
  return (n + "").length;
}

//
function digits(n) {
  return `${n}`.length;
}

//
const digits = (n) => {
  return n < 10 ? 1 : digits(n / 10) + 1;
};
