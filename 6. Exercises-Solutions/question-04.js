// 4. 
// Solution 1. for-Loop

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'boat', 'nigel', 'squirt', 'darla', 'hank'];

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo")
      console.log("We've found Nemo!");
  }
}


findNemo(everyone);

// Solution 2. forEach
const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === "nemo")
      console.log("We've found Nemo!");
  })
}

findNemo2(everyone);


// Solution 3. for-let 
const findNemo3 = array => {
  for (let fish of array) {
    if (fish === "nemo")
      console.log("We've found Nemo!");
  }
}

findNemo3(everyone);