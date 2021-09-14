//17. A

function palindrome(num) {
  if (!num || (typeof num !== 'number'))
    return 'insert a valid number';

  const string = String(Math.abs(num));  // number to String
  const array = string.split('')            // string to Array
  const reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--)
    reversedArray.push(array[i]);

  const number = Number(reversedArray.join('')) // array to number

  return number === num ? true : false;
}

palindrome(404)


//17. B

function palindrome(string) {
  if (!string || (typeof string !== 'string'))
    return 'insert a valid string';

  const reversedArray = [];
  for (let i = string.length - 1; i >= 0; i--)
    reversedArray.push(string[i]);

  const ouput = reversedArray.join('') // array to string

  return string === ouput ? true : false;
}

palindrome("racecar")