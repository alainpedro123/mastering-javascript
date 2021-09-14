//16. Given a 32-bit signed integer, reverse digits of an integer. 

function reverse(x) {
  const limit = 2147483648; // or 0x7FFFFFFF in hexadecimal. It's value for a 32-bit signed binary integer in computing
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join('')); // convert into string, reverse and then convert back into number
  return n > limit ? 0 : n * k;
};


function reverse2(x) {
  const limit = 2147483648;
  const signal = x < 0 ? -1 : 1;

  // converting the number into string
  const string = String(Math.abs(x));

  // looping through the  string and reverse it
  const length = string.length;
  let reversedString = []

  for (let i = length - 1; i >= 0; i--)
    reversedString.push(string[i])   // pushing the string into the array
  console.log('Array: ', reversedString);


  // converting the array into string
  const arrayToString = reversedString.join('');
  console.log('String: ', arrayToString);

  // converting the string into number
  const number = Number(arrayToString);

  return number > limit ? 'The number is greater than the limit' : number * signal;
}

reverse2(1234);