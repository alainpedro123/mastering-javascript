/* 
	OPERATORS - are used along with varibales and constants to create expressions, and with these expressions we can implement logic and algorithms

*/

// in Javascript there are different types of Operators:

// 1. ARITHMETIC

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // 10^3

console.log(++x); 	// Increment
console.log(x++);

console.log(--x); 	// Decrement
console.log(x--);


// 2. ASSIGNMENT 
let x = 5;

x++;
x = x + 1;
x += 1;

x = x * 3;
x *= 3;


// 3. COMPARISON
let X = 1;

// Relational
console.log(x > 0);   // true
console.log(x >= 1);  // true
console.log(x < 1);   // false
console.log(x <= 1);  // true

// Equality
console.log(x === 1)  // true
console.log(x !== 1)  // false

// Strict Equality (Both element must have the same Type + Value)
console.log(1 === 1)  	// true
console.log('1' === 1)  // false

// Loose Equality (Both element must have the same Value)
console.log(1 == 1)  	// true
console.log('1' == 1)  // true
console.log(true == 1)


// 4. LOGICAL
let x = 1;
let y = 2;

// AND
console.log((x === x) && (y > x))  	// true
console.log((x === x) && (y === x))  	// false

// OR
console.log((x === y) || (x > x))  	// false
console.log((x === x) || (y === x))  	// true

// NOT
console.log((x !== y))  	// true
console.log((x !== x))  	// false



// 5. LOGICAL - with Non Booleans Values

false || true         // true
false || "Alain"      // string 
false || 1


// Falsy - the values below when used in an logical expression they are treated us falsy: 
// undefined, null, 0, false, '', NaN

// Truthy - anything that is not Falsy is Truthy 

false || 1 || 2  // '1' - as soon as we found any operand that is truthy is found it's gonna be returned and the evaluation stops


let userColor = 'red'
let defaultColor = 'blue'
let currentColor = userColor || defaultColor  // if we have a value for userColor use it otherwise use the defaultColor

console.log(currentColor)  // red

let userColor = undefined
let defaultColor = 'blue'
let currentColor = userColor || defaultColor  // if we have a value for userColor use it otherwise use the defaultColor

console.log(defaultColor)  // blue



// 6. BITWISE
