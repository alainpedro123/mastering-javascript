// Factory Function - a function that produces or creates objects

// Factory Function
function createCircle(radius, location) {
	return {
		radius,   // radius: radius
		location, // location: location
		isVisible: true,
		draw() {
			console.log("drawing")
		}
	}

}

const circle1 = createCircle(1)
const circle2 = createCircle(2)

console.log(circle1);
console.log(circle2);