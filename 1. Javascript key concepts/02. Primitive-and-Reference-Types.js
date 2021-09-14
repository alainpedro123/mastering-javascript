/* 1.PRIMITIVES / VALUE TYPES: are copied by their value.
- String
- Number
- Boolean
- Undefined
- Null*/

let name = 'Alain'			// String
let age = 24 				// Number
let isAprroved = false		// Boolean
let received = true 		// Boolean
let firstName = undefined   // undefined
let lastName 		        // undefined
let middleName = null		// null


// symbol (variable type) – they’re used because they create that completely unique type, they might be mainly used for declaring object properties. 
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


/* 2.REFERENCE TYPES: are copied by their reference
- Objects
- Arrays
- Functions
*/

// 2.1.Objects: are collection of key-value pairs. They're useful when dealing with multiple related variables (properties), we can put this variables inside an Object, we can encapsulate them.

let person = {
	name: 'Alain',
	age: 24
}

Accessing the properties:

// Dot Notation
person.name = 'Afonso'

// Bracket Notation

// a) first way
person['name'] = 'Pedro'

// b) second way
let selection = 'name'
person[selection] = Pedro


// 2.2.Array: is a data structure that we use to represent a list of item. When dealing with a list of objects, we can use arrays to store this list.
// Arrays in JavaScript are objects

let colors = ['red', 'blue', 'green', 'yellow']


/* 2.3.Function - is a set of statement that performs a task or calculates a value. There are two functions, functions that "performs a task" and "calculating a value"
	Functions in JavaScript are objects
*/

// a) first way - Performing a Task
function (name, lastName) {
	console.log(`Hello ${name} ${Afonso}`)
}

// b) Second way
const myFunction = function () {   // anonymous function
	return ...
};

// c) Third way
const newFunction = function myFunction() {
	return ...
};

// d) Fourth way - Calculating a value
const square = (number) => {
	return number * number
}

square(2)
