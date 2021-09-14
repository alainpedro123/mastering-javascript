// 1. Factory Function

function createCircle(radius, location) {
	return {
		radius,   // radius: radius
		isVisible: true,
		draw() {
			console.log("drawing")
		}
	}

}

const circle1 = createCircle(1)

// 2. Constructor Function
function CreateCircle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log("drawing")
	}
}

const circle = new CreateCircle(1)

// 3. Constructor Property
// Every Object has Constructor Property and that references a function that was used to create that object.

let x = {}
let x = new Object  // Constructor

new String(); // '', " ", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...