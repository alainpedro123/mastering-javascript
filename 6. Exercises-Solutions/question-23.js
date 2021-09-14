// 23.

const nums = [3,2,2,3]; 
const value = 3;

const nums2 = [0,1,2,2,3,0,4,2]
const value2 = 2;

// FOR
function removeElement (array, value) {
  let result = [];
  for( let i = 0; i < array.length; i++){
    if(array[i] !== value)
        result.push(array[i]);
    }
    return result.length;
};

//FOR-OF
function removeElement2(array, value) {
  let result = [];
  for( let item of array){
    if(item !== value)
        result.push(item);
    }
    return result.length;
};


removeElement(nums2, value2)