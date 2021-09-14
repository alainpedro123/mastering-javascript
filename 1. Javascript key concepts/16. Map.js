/* Map –  is a collection of keyed data items, just like an Object. 
But the main difference is that: Map allow us to save any data type as the key, They can have keys as object and map has size() method.
Another benefit of Map is that it maintains insertion order. Map accepts onlu unique keys, which means that it doesn't store duplicate keys.

new Map() – creates the map. If an iterable object is provided (usually an array), it copies values from it into the set.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

For looping over a map, there are 3 methods:
map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

// Creating a Map - First way
const recipeMap = new Map();
map.set('cucumber', 500);
map.set('tomatoes', 350);
map.set('onion', 50);

console.log(recipeMap);

// Creating a Map - second way
console recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

console.log(recipeMap);


// Iterating through the map

// for - of
for (let vegetable of recipeMap.entries()) { // recipeMap.keys(), recipeMap.values()
  console.log(vegetable)
}

// forEach
recipeMap.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});


// Map can also use objects as keys.
const john = { name: "John" };  // object

const phoneBook = new Map();    // map
phoneBook.set(john, 791123234);

console.log(phoneBook);