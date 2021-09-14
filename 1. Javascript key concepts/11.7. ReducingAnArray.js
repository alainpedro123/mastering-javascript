// Anytime you have an array of values and you want to get a single value as a result of itereating that array think of the redude method.
// In this we're finding the largest value in this array, so we're reducing this array into a single value


// EXAMPLE 1

const array = [1, 2, 3, 4];
array.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator * currentValue;
}, 1);

// iteration 1: 1 * 1 => return 1
// iteration 2: 1 * 2 => return 2
// iteration 3: 2 * 3 => return 6
// iteration 4: 6 * 4 => return 24
// return value is 24

/*
The reduce() method 
- reduces the array to a single value.
- executes a provided function for each value of the array (from left-to-right).
- The return value of the function is stored in an accumulator (re-sult/total).
- does not execute the function for array elements without values.
- does not change the original array.

*/


// EXAMPLE 2
const numbers = [1, 2, 4, 5]

// Calculting the sum of all the numbers

// solution 1
let sum1 = 0;
for (let number of numbers)
	sum1 += number;

console.log(sum1)

// Solution 2
 const sum2 = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue );
 console.log(sum2)



 // Reduce is a really powerful method, we can mapping and filtering with this method. Accumulator is something where we can store the information that happens in the body of the function
