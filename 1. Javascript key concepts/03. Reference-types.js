 // 2.REFERENCE TYPES: are copied by their reference

let x = { value: 10};
let y = x;
let z = { value: 10};


console.log(x === y)   // true
console.log(x === z)   // false

// x and z variables pointing to the same object

x.value = 20;  // when modyfing x.value, that change is also visible to y.value

console.log(x)
console.log(y)


// Exemple 2

let obj = { value: 20 }

function increase(obj){  // the parameter 'obj' is pointing to the same object defined above (2 variables pointing to the same object), any change made to that object will be visible to the other variable
	obj.value++;
}

increase(obj)
console.log(obj)   // 21