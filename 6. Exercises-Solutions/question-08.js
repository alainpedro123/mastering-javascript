// 8.
const array = [6, 4, 3, 2, 1, 7];
const number = 9;

// Solution 1 - Naive - O(n^2)
function hasPairWithSum(arr, num) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === num)
        return true;
    }
  }

  return false;
}

// Solution 2 - Better - O(n)
// Using "Set Data Structure" - because it's useful to check the presence of an item
function matchingPair(array, number){
  const mySet = new Set();
  for(let i = 0; i < array.length; i++){
    mySet.add(number - array[i]);

    if(mySet.has(array[i]))
      return true;
  }
  return false;
}

matchingPair(array, number)

// 1) declare a Set Data structure

// 2) do the following substraction operation:  number - array = [3, 5, 6, 2, 8, 2]

// 3) Push into the set the result of the above operation 

// 4) Compare if the set has any common item with the array and returns true, otherwise, it returns false
// array = [6, 4, 3, 2, 1, 7];   
//   set = {3, 5, 6, 2, 8, 2}

// The idea behind this solution is that if 6 + 3 = 9 (which is the target number), therefore 9 - 3 = 6 and 9 - 6 = 3. 
// So if the set and array has two equal number we've found the matching pair