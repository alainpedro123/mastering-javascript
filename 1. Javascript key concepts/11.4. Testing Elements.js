// EVERY - checks if every elements in a given array match the given criteria
const numbers = [1, 2, 3, 4]
const allPositive = numbers.every(value => value >= 0);
console.log(allPositive)


// SOME - checks if at least one element in a given array match the given criteria
const numbers = [1, 2, -3, 4]
const atleastOnePositive = numbers2.some(value => value >= 0);
console.log(atleastOnePositive)