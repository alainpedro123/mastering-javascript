// The Quick Sort used the idea of dived and conquer.
// It finds the element called Pivot which divides the array into two halves in such a way that elements in the left half are smaller than pivot and elements in the right are greater than pivot
// Pivot is simply one of the items of the array.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [38, 27, 43, 3, 9, 82, 10];

// 3) Sort
function quickSort(array, left, right){  
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

// 2) Divide into parts
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

// 1) Swap
function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);


// partition - divide into parts.
// pivot  - the central point.
// eixo vertical fixo, à volta do qual gira uma peça móvel