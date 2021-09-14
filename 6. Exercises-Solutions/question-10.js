// 10. 

const firstArray = [0, 3, 4, 31];
const secondArray = [4, 6, 30];

// SOLUTION 1
function mergeSortedArrays(array1, array2){ // O(n)
  if(array1.length === 0)
    return array2;

  if(array2.length === 0)
    return array1;

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1, j = 1;

  while(array1Item || array2Item){
    if(array1Item < array2Item || array2Item === undefined){
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }
    else{
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays(firstArray, secondArray);


// SOLUTION 2
function mergeArrays(array1, array2){
  const mergedArray = [...array1, ...array2];

  sort(mergedArray);
  return mergedArray;
}

function sort(array){
  quickSort(array, 0, array.length - 1);
}

function quickSort(array, start, end){
  if(start === end)
    return "An one-element array can't be sorted";

  if(start > end)
    return "Empty array";

  const boundary = partition(array, start, end);
  quickSort(array, start, boundary - 1);
  quickSort(array, boundary + 1, end);
}

function partition(array, start, end){
  let pivot = array[end];
  let boundary = start - 1;

  for(let i = start; i <= end; i++)
    if(pivot >= array[i]){
      boundary++;
      swap(array, i, boundary);
    }
    return boundary;
}

function swap(array, index1, index2){
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

mergeArrays(array1, array2)


// SOLUTION 3
function mergeSortedArrays(array1, array2) { // O(n^2)
  let mergedArray = [];
  if (array1.length === 0)
    return array2;

  if (array2.length === 0)
    return array1;

  for (let item of array1)
    mergedArray.push(item)

  for (let item of array2)
    mergedArray.push(item)

  return sort(mergedArray);
}

function sort(array) {
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length; j++)
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
  return array;
}

merge(array1, array2);