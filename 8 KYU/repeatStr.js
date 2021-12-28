// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

//
function repeatStr(n, s) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
}

//
function repeatStr(n, s) {
  return n > 1 ? s + repeatStr(--n, s) : s;
}

console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(2, "ha ")); // "ha ha "
