const circle = {
	radius: 1,
	draw(){ console.log('draw')}
}

// a) Iterate over all the properties and methods in an Object - This is the simplest way to enumerate the properties of an Object!!
for(let key in circle)
	console.log(key, circle[key]);

// a) Iterate over all the properties and methods in an Object
for(let key of Object.keys(circle))  // Object.keys -> returns the keys a string array
	console.log(key);

// a) Iterate over all the properties and methods in an Object
for(let entry of Object.entries(circle))  // Object.entries -> returns each key-value pair as an array
	console.log(entry);

// checking if the object has a given method or property
if('radius' in circle)
	console.log('yes')