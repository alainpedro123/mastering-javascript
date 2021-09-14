// 1. CREATING AN ARRAY

// a) First way
const large = new Array(100).fill('nemo'); // array will nemo

// b) Second way
const large = ['nemo', 'nemo',.. ];  // nemo 100 times

// c) Two-Dimensional Arrays
const items = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(items[0][0]); // 1
console.log(items[0][1]); // 2
console.log(items[1][0]); // 3
console.log(items[1][1]); // 4
console.log(items);


// 2. ADDING ELEMENTS INTO AN ARRAY
const numbers = [3, 4]

numbers.push(5, 6) // At the end 
numbers.unshift(5, 6) // At the begining
numbers.splice(2, 0, 'a', 'b')   // At the middle
// 2 -starting position, 0 - number of elements to be deleted, 'a, b' - elements to be added


// 3. REMOVING ELEMENTS FROM THE ARRAY
const numbers = [1, 2, 3, 4]

numbers.pop() 			// At the end 
numbers.shift() 		// At the begining
numbers.splice(2, 1)    // At the middle
// 2 -starting position, 1 - number of elements to be deleted

numbers.splice(2, 2)    // Deleting multiple elements starting at index '2'


// 4. FINDING ELEMENTS IN THE ARRAY

// a) Primitive
const numbers = [1, 2, 3, 1, 4]
numbers.indexOf('1')
numbers.lastIndexOf(1)
numbers.includes(1)


// b) Reference Type - Object
const courses = [
    { id: 1, name: 'Javascript' },
    { id: 2, name: 'Reactjs' }
]

// find
const searchCourse = courses.find(course => course.name === 'Javascript')
console.log(searchCourse)

// finding index
const searchCourse = courses.findIndex(course => course.name === 'Javascript')
console.log(searchCourse)


// 5. EMPTYING AN ARRAY

let numbers = [1, 2, 3, 4]

// a) Solution 1
numbers = [];

// b) Solution 2
numbers.length = 0;

// c) Solution 3
numbers.splice(0, numbers.length)

// d) Solution 4
while (numbers.length > 0)
    numbers.pop();



###############################

const strings = ['a', 'b', 'c', 'd'];
console.log(strings);

// accessing the element at index 2
strings[2];

// PUSH - adds an element at the end of the array
strings.push('e');        // O(1)

// POP - removes an element at the end of the array
strings.pop();            // O(1)

// UNSHIFT - adds an element at the beggining of the array
strings.unshift('x');     // O(n) 

// SPLICE - adds the element 'alien' in the index 2 of the Array strings
strings.splice(2, 0, 'alien');   // we looped to half of the array  O(n/2) => O(n)
console.log(strings);