// 15. 

const nums = [1, 2, 7, 11, 15];
const target = 9;

// Solution 1 - worst O(n^2)
function twoSum(array, number) {
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length; j++)
      if (array[i] + array[j] === number)
        return [i, j]
}

twoSum(nums, target);


// solution 2 - Better O(n)
function twoNumbers2(array, number) {
  const map = {};  // to store the subtraction result of the target number with the array numbers. 
  for (let i = 0; i < array.length; i++) {
    map[target - array[i]] = i; // storing the subtraction result at the given index(i) at the key object => map { 0: 8, 1: 7 .... and so on }
    if (map[array[i]])  // checking/comparing if the result we just stored is equal to the previous stored result 
      return [map[array[i]], i] // if so, return the actual and previous array indices
  }
}

twoNumbers2(nums, target);


// 9 - [1, 2, 7, 11, 15]  = [8, 7, -2, -6]

/*

*/