// PRIMITIVES

const numbers = [ 2, 4, 3, 1]
numbers.sort()   // it converts each element to a string and then sort them
numbers.reverse();

// REFERENCE TYPES

const courses = [
	{ id: 1, name: 'Nodejs'},
	{ id: 2, name: 'Javascript'}
]


courses.sort((a,b)=>{
	// a < b => -1
	// a > b => 1
	// a === b => 0
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toLowerCase();

	if(nameA < nameB) return -1;
	if(nameA > nameB) return 1;
	return 0;
})


console.log(courses);

