// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note : Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// 1
// функция Number() позволяет преобразовывать JavaScript строку в число. Но, у этой функции есть один недостаток, она может выполнять преобразования только десятичных чисел.
var stringToNumber = function (str) {
  return Number(str);
};

// 2  Может работать только с целыми числами.
var stringToNumber = function (str) {
  return parseInt(str);
};

// 3
var stringToNumber = function (str) {
  return parseFloat(str);
};

// 4
// для преобразования числа в строку автоматически, мы можем использовать
// арифметический оператор JavaScript.
var stringToNumber = function (str) {
  return +str;
};
