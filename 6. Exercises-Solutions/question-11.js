// 11.

// Solution 1 - Using Nested Arrays: it takes one item at the time and compare to the other items

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4]

const firstRecurringCharacter = input => {  //0(n^2)
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j])
        return input[i];
    }
  }
  return undefined;
}

firstRecurringCharacter(array);

// SOLUTION 2
const firstRecurringCharacter = input => { // 0(n)
  let map = {};  // to track all the items in the array - the keys are gonna be unique
  for(let i = 0; i < array.length; i++){
    if(map[array[i]] !== undefined)  // as soon as we find a key that already exists
      return array[i];               // it means that we've found the recurring number, so we return it
    
    else
      map[array[i]] = i;    // otherwise we add that key to our map - we push into the map object.
  }
  return undefined;
}

firstRecurringCharacter(array);



// HASH TABLE: Storing and modyfying custom values in constant time is Over power.

// SOLUTION 3
const firstRecurringCharacter = input => { // 0(n)
  let map = {};  // to track all the items in the array - the keys are gonna be unique
  for(let i = 0; i < array.length; i++){
    if(map[array[i]])  // checking array's element one by one if they already exists in the Hash map
      return array[i];  // if yes means that we've found the recurring number, so we return it
    
    else
      map[array[i]] = i;    // otherwise we add that key to our map - we push into the map object.
  }
  return undefined;
}

firstRecurringCharacter(array);