// 3.

const array = ['a', 'b', 'c', 'd', 'e'];

// FOR
function logAllPairs(array){   // loops nested -> O(n^2)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(array);


// For-OF
function logAllPairs(array){
  for(let i of array){
    for(let j of array){
      console.log(i, j)
    }
  }
}

logAllPairs(array)