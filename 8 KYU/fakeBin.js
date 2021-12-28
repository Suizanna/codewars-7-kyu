// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string.

// 1
function fakeBin(x) {
  let outputString = "";
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) < 5) {
      outputString += "0";
    } else {
      outputString += "1";
    }
  }
  return outputString;
}

// 2
function fakeBin(x) {
  return x
    .split("")
    .map((num) => (num >= 5 ? "1" : "0"))
    .join("");
}

console.log("fakeBin(x):", fakeBin("917"));

// 3
function fakeBin(x) {
  const arr = [];
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i] < 5)) {
      arr.push(0);
    } else {
      arr.push(1);
    }
  }
  return arr.join("");
}
