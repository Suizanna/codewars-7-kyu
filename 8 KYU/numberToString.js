// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// 1
function numberToString(num) {
  return num.toFixed();
}

numberToString(67);

// 2
function numberToString(num) {
  return num.toString();
}

// 3
// В JavaScript имеются встроенная функция, которая позволяет явно преобразовать число в строку JavaScript – функция String(), не путайте функцию String() с JavaScript объектом String.

function numberToString(num) {
  return String(num);
}

// 4
function numberToString(num) {
  return num + "";
}
