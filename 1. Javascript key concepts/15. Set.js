/* Set  - is a special type collection – “set of values” (without keys), where each value may occur only once.

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), it copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

For looping over a set, there are 3 methods:
set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
*/

// Creating a Map - First way
const set = new Set();

// Creating a Set - First way
const nameSet = new Set();
nameSet.add("john");
nameSet.add("pete");
nameSet.add("mary");


// Creating a Set - Second way
const fruitSet = new Set(["oranges", "apples", "bananas"]);


// Iterating through the Set

// for-of /*
for (let name of nameSet) {
  console.log(name);
}

// forEach
fruitSet.forEach((fruit, fruitSet) => {
  console.log(fruit);
});