// Very simple, given an integer or a floating-point number, find its opposite.

//
function opposite(number) {
  return -number;
}
console.log(opposite(7));

//
function opposite(number) {
  let oppNum = 0 - number;
  return oppNum;
}

//
function opposite(number) {
  let newNum = "-" + number;
  let oppNum = parseInt(newNum);
  return oppNum;
}
