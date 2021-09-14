// 25

const nums = [1,3,5,6];
const target = 5, target2 = 2, target3 = 7, target4 = 0;

// FOR
function searchInsert(array, target) {
  let index = 0;
  for( let i = 0; i < array.length; i++){
    if(array[i] === target)
        return i;
    
    if(array[i] !== target && target === 0)
      return 0;

    if(target > array[i])
      index++;
    }
    return index;
}

searchInsert(nums, target4)