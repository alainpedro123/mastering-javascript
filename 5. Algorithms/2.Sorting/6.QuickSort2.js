const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [38, 27, 43, 3, 9, 82, 10];

// 4) Sort
function sort(array){
  quickSort(array, 0, array.length-1);
}

// 3) Sort
function quickSort(array, start, end){  
  if(start === end)
    return "An one element array can't be sorted";

    if(start > end)
    return "Empty Array";
  
    const boundary = partition(array, start, end);
    quickSort(array, start, boundary - 1);  //sort left part
    quickSort(array, boundary + 1, end);    //sort right part
}

// 2) Divide into parts
function partition(array, start, end){
  let pivot = array[end];
  let boundary = start - 1;   // the left partition is empty

  for(let i = start; i <= end; i++) 
    if(pivot >= array[i]){
      boundary++;
      swap(array, i, boundary);
    }

  return boundary;
}

// 1) Swap
function swap(array, index1, index2){
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

sort(numbers2);
console.log(numbers2);