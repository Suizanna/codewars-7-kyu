// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// 1
function toBinary(n) {
  var s = n.toString(2);
  var n = Number(s);
  return n;
}
toBinary(1); // 1
toBinary(2); // 10
toBinary(5); // 101

// Метод toString() разбирает свой первый аргумент и пытается вернуть строковое представление в системе счисления с указанным основанием.
// 2
const toBinary = (n) => Number(n.toString(2));

// 3
function toBinary(n) {
  return +n.toString(2);
}

// 4
function toBinary(n) {
  return parseInt(n.toString(2));
}
