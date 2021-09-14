// PRIMITIVES
const first = [1, 2, 3];
const second = [4, 5, 6];

// a) Combining an array
const combination = first.concat(second)

// b) Slicing an array
const slice = combined.slice(2)  	// starting from index 2 all the way till the end
const slice = combined.slice(2, 4)  // starting from index 2 till 4
const slice = combined.slice(2)  	// getting a copy of the original array 


// REFERENCE TYPE

const first = [{ id: 1 }];
const second = [4, 5, 6];

// a) Combining an array
const combination = first.concat(second)
console.log(combination)

first[0].id = 10;
console.log(combination)


// CLONING OPERATOR
//  b) Cloning vs combining Operator
const first = [1, 2, 3];
const second = [4, 5, 6];

// Combining an array
const combination = first.concat(second); // old way - concat

const combination = [...first, ...second] // new way - SpreadOperator
const combination = [...first, 'a', ...second, 'b']

// cloning an array
const clone = [...first];
console.log(first);
console.log(clone);