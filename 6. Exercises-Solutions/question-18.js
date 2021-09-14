// 18.  INCOMPLETE

function romanToInteger(number) {
  switch (number) {
    case "I": number = 1;
      break;
    case "V": number = 5;
      break;
    case "X": number = 10;
      break;
    case "L": number = 50;
      break;
    case "C": number = 100;
      break;
    case "D": number = 500;
      break;
    case "M": number = 1000;
      break;
    default: number = "Enter a valid Roman numeral";
  }
  return number;
}

romanToInteger("V");
