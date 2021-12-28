// If a number between 0 and 9 is specified, return it in words.
// Login :: 1
// Exit :: "One".

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";

    case 1:
      return "One";

    case 2:
      return "Two";

    case 3:
      return "Three";

    case 4:
      return "Four";

    case 5:
      return "Five";

    case 6:
      return "Six";

    case 7:
      return "Seven";

    case 8:
      return "Eight";

    case 9:
      return "Nine";

    default:
      return "Enter a number between 1 and 9.";
  }
}

console.log(switchItUp(1));
console.log(switchItUp(7));
