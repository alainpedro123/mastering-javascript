// 7.
// a) FIRST SOLUTION - Big-O: O(a*b) - nested-for-loops
const array1 = ['a', 'b', 'c', 'x'];  // a
const array2 = ['z', 'y', 'i'];		  // b

function checkItems(array1, array2){ //O(n^2)
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j])  // comparing 'a' to 'z'; 'a' to 'y' so on and so on
        return true;
    }
  }
  return false;
}

checkItems(array1, array2);


// b) SECOND SOLUTION
function commonItens(array1, array2){
  let map = {};
  for(let i = 0; i < array1.length; i++)
    if(!map[array1[i]]) // if map doesn't contain the elements of the array1
      map[array1[i]] = true; // converting the array1 into an "object { a: true, b: true, c: true, x: true}

  for(let i = 0; i < array2.length; i++)
    if(map[array2[i]])
      return true;
  return false;
}

commonItens(array1, array2)



// c) THIRD SOLUTION
function checkItems3(array1, array2){
  return array1.some(item => array2.includes(item))
  // iterate through each item of the array1 if some of them include the item or our array2 return true or false
}

checkItems3(array1, array2);