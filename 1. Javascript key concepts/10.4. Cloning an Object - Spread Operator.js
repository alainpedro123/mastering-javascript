const circle1 = {
	radius: 1,
	draw(){ console.log('draw')}
}

// EXAMPLE 1
// 1. First way - The best! The spread operator is use to spread an object, which basicly means getting all it's properties and method and putting the, into another object
const circle2 = { ...circle1 }
console.log(circle2)

// 2. Second way. Object.assign copies the properties and methods from one or more source objects into a target object, we can use it to clone an object or combine multiple objects into a single object
const circle2 = Object.assign({}, circle2)

//3. third way
const circle2 = {}
for(let key in circle1)
	circle2[key] = circle1[key]



// *******************************************
// EXAMPLE 2
const first = { name: 'Alain' };
const second = { job: 'Developer' };

const combination = {... first, ...second, location: 'Poland'}

const clone = { ... first };
