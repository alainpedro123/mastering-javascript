// 1. TWO WAYS TO DECLARE A FUNCTION 

// a) Function Declaration
function walk() {
	console.log('walk');
}

// b) Anonymous Function Expression
let run = function () {
	console.log('run');
}

walk();
run();

let move = run;
move();


// 2. PURE and NON-PURE FUNCTION

// Pure function 
function addTwoNumbers(a, b) {
	return a + b;
}


// Non-Pure function
let a = 10;
function addTwoNumbers(a, b) {
	return a + b;
}


// 3. HOISTING - is the process of moving function declarations to the top of the file. And it's done automatically by the Javascript Engine that is executing this code.

// Hoisting
function walk() {
	console.log('walk');
}


let run = function () {
	console.log('run');
}

walk();
run();


// 4. ARGUMENTS
// Iterating over Arguments

function sum() {
	let total = 0;
	for (let value of arguments)
		total += value;
	return total;
}

sum(5, 5, 10, 5, 1);


// 5. REST OPERATOR

// function with many parameters
function restOperator(...args) {  // the rest operator converts wherever we pass in into an array.
	console.log(args)
}

restOperator(5, 5, 10, 5, 1)  // it returns an array of the parameters we're passing in


// Sum 
function sum(...args) {
	let total = 0;
	return args.reduce((a, b) => a + b);
}

sum(5, 5, 10, 5, 1);


// calculate the total cost of items in a shopping card
function sum(discount, ...prices) {
	const total = prices.reduce((a, b) => a + b);
	return total * (1 - discount)
}

sum(0.1, 20, 30);  // 0.1 is the discount