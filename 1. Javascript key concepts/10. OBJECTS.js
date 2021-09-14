// Objects: are collection of key-value pairs. They're useful when dealing with multiple related variables (properties), we can put this variables inside an Object, we can encapsulate them.
// The purporse of an Object is to group related variables and functions that operate on these variables.

// 1. two ways to define an object
const person = {}
const person = new Object();

// 2. Creating object, with one property and two methods.
const person = {
	name: 'Alain',		// property or attribute
	walk() { }, 			// method
	talk() { }			// method
}


// 3. Accessing the members of the  object
person.talk();
person['name'] = 'John'; // this way of assigning value is useful when we don't know what property or method we're going to access
person.name = 'John;'

// dinamically accessing a property or method in an object
const targetMember = 'name';
person[targetMember] = 'John';


// 4. circle object
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	isVisible: true,
	draw() {
		console.log("drawing")
	}
}

circle.draw()  // Method

circle.color = 'yellow'; 		// adding a new property
circle.redraw = function () { }	// adding a new method
delete circle.color;			// deleting a property
delete circle.draw; 			// deleting a method


// 5.	New ways of declaring objects properties

// First
const name ='Alain';
const object = {
    [name]: 'hello', 
     [1 + 2]: 'hihi'
}

// Second

const a = "Simon";
const b = true;
const c ={};

const object = {
    a,
    b,
    c
}
