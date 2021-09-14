// 9. 

const mystring = "Hi my name is Alain";

// Solution 1
function reverseString(string){
  if (!string || typeof string !== 'string' || string.length < 2)
    return 'insert another string'

  const reversed = [];
  for(let i = string.length - 1; i >= 0; i--)
    reversed.push(string[i]);
  
  return reversed.join('');
}

reverseString(mystring);


// Solution 2
let mystring = "Hi my name is Alain";

function reverseString(string){
  // The split() method is used to split a string into an array of substrings, and returns the new array. 
  return string.split('').reverse().join();
}

reverseString(mystring);


// Solution 3
let mystring = "Hi my name is Alain";

const reverseString = string => string.split('').reverse().join();

reverseString(mystring);


// Solution 4
let mystring = "Hi my name is Alain";

const reverseString = string => [...string].reverse().join();

reverseString(mystring);
