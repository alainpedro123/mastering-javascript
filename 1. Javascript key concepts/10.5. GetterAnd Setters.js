// Get and Set are special methods of an Object
// getters - are used to access properties in an object
// setters - are used to change or mutate these properties

const person = {
	firstName: 'Alain',
	lastName: 'Afonso',
	get fullName() { //getter
		return `${person.firstName} ${person.lastName}`
	},

	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
}

console.log(person);

person.fullName = 'Edson Lucas'   // setter
console.log(person);


//  Getter and Setter II

function Circle(radius) {
	this.radius = radius;

	let defaultLocation = { x: 0, y: 0 };

	// 2. one way
	this.getDefaultLocation = function () {
		return defaultLocation;
	}

	this.draw = function () {
		console.log("drawing");
	}
	// 2. We do it this way - this is read only property
	Object.defineProperty(this, 'defaultLocation', {
		get: function () {
			return defaultLocation;
		},
		set: function (value) { // 3. in case we wanna set a property of this value from outside we define a "setter"
			if (!value.x || !value.y)
				throw new Error('Invalid location.');
		}
	})
}

const circle = new Circle(10);
circle.defaultLocation = 0;
circle.draw();


// 1. How to display the private properties "defaultLocation" somewhere outside in the application