const numbers = [1, 2, -3, 4, -5]

// Filtering the positive numbers
const filtered = numbers.filter(number => number >= 0)

const items = filtered.map(n => ({ value: n }) )
console.log(items)


// Chaining
const items = numbers
	.filter(number => number >= 0)
	.map(n => ({ value: n }) );
    .filter(obj => obj.value > 1)  // getting object with value greater than 1
    .map(objt => obj.value)		   // reading the value property an returning it

console.log(items);


// Map is useful in React to rend a lists of items

const colors = [ 'red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);

// Another example - multiplying the array by 2 with map method.  
const array = [1, 2, 10, 16];
const mapArray = [];

mapArray = array.map(num=> num * 2);
console.log('map', mapArray);
