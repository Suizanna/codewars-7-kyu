// Create a function that takes an integer as an argument and returns Even for even numbers or Odd for odd numbers.

function even_or_odd(number) {
  if (typeof number === "number") {
    if (number % 2 === 0) {
      return "Even";
    } else return "Odd";
  }
}

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else if (number % 2 === 1) {
    return "Odd";
  } else if (number % 2 === -1) {
    return "Odd";
  }
}
even_or_odd(2); // "Even"
even_or_odd(-2);

even_or_odd(1); // "Odd"
even_or_odd(-9);
