// LOOPS - to repeat an action a number of times

// 1. WHILE
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}


// 2. DO...WHILE
let counter = 0;
do {
    console.log(counter);
    counter++;
} while (counter <= 10);


// 3. FOR
for (let i = 0; i <= 10; i++) {
    console.log(i)
}


// 4. FOR... IN - to iterate over the properties and methods of an OBJECT 
const basket = ['apples', 'oranges', 'avocados'];

// Displaying the indexes
for (let index in basket) {
    console.log(index);
}

// Displaying the values
for (let index in basket) {
    console.log(basket[index]);
}


const fruitsBasket = {
    apples: 5,
    oranges: 10,
    avocados: 15
}

for (let fruit in fruitsBasket) {
    console.log(fruit);			// apples, oranges, avocados
}


for (let key in fruitsBasket) {
    console.log(fruitsBasket[key]);  // 5, 10, 15
}



// 5. FOR... OF - to iterate over the elements or item in an ARRAY. This only works for Arrays and Maps


const fruitsBasket = ['apples', 'oranges', 'avocados'];

for (let fruit of fruitsBasket) {  // apples, oranges, avocados 
    console.log(fruit);
}


// 6. FOR EACH

// example 1
const fruitsBasket = ['apples', 'oranges', 'avocados'];
fruitsBasket.forEach(fruit => console.log(fruit));  // apples, oranges, avocados 

// example 2
const numbers = [1, 2, 3, 4];
numbers.forEach((number, index) => console.log(index, number));

// example 3 - Multiplying the array by 2 using forEach
const array = [1, 2, 10, 16];
const arrayX2 = [];

const newArray = array.forEach(num => arrayX2.push(num * 2));
console.log('arrayX2', mapArray);
