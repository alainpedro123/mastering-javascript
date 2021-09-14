// 22.

const nums = [1,1,2];
const nums2 = [0,0,1,1,1,2,2,3,3,4];

// SOLUTION 1
function removeDuplicates(array){
  let count = 0;
  let map = {};
  for(let i = 0; i < array.length; i++){
    if(!map[array[i]]){
      const items = array[i];
      map[items] = true;
      count++;
    }
  }
  return count;
}

removeDuplicates(nums2);



// SOLUTION 2
function removeDuplicates(nums) {
    let count = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[count] != nums[i]){
            count++;
            nums[count]=nums[i];
        }
    }
    return count+1;
};

removeDuplicates(nums2);