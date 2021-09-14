// 1.
// Calculating the time the function takes to perform

const nemo = ["nemo"];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'boat', 'nigel', 'squirt', 'darla', 'hank'];
const largeArray = new Array(100).fill("nemo")  // create an array with 100 elements "nemo" 

// looping through and find nemo and console log 100 times
let time1 = performance.now();
function findNemo(array) {
  for (let i = 1; i < array.length; i++) {  // O(n)
    if (largeArray[i] === "nemo")
      console.log("We've found nemo ", i)
  }

  let time2 = performance.now();
  console.log(`Call to find all nemos took ", ${ (time2 - time1) / 1000 }, seconds.`);
}

// testing the same function 3 times with different inputs
findNemo(largeArray);
findNemo(nemo);
findNemo(everyone);