/*You are given two non-empty linked lists:
 (2 -> 4 -> 3)
 (5 -> 6 -> 4)
 representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


var addTwoNumbers = function (l1, l2) {
  let node = null
  const carry = arguments[2]
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const next1 = l1 ? l1.next : null
    const next2 = l2 ? l2.next : null
    const val = carry ? val1 + val2 + 1 : val1 + val2
    node = new Node(val % 10)
    node.next = addTwoNumbers(next1, next2, val >= 10)
  } else if (carry) {
    node = new Node(1)
    node.next = null
  }
  return node
};


// If the character is in the hash table, we have to update the index after we do the following procedures:

// 

const nums1 = [1, 3];
const nums2 = [5, 7, 4];

function median(array1, array2) {
  const mergedArray = [];
  for (let item of array1)
    mergedArray.push(item)

  for (let item of array2)
    mergedArray.push(item)

  const sortedArray = sort(mergedArray);
  const middle = Math.floor(sortedArray / 2);
  let medianNum = 0;
  if (middle % 2 !== 1) {
    medianNum = sortedArray[middle];
    console.log(medianNum)
    return medianNum
  }
}

function sort(array) {
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length; j++)
      if (array[j] > array[j + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
  return array;
}

median(nums1, nums2)

//*************

var findMedianSortedArrays = function (nums1, nums2) {
  // join two arrays and sort. 
  const arr = nums1.concat(nums2).sort(customSort);
  const middle = arr.length / 2;

  if (middle % 2 > 0 && arr.length % 2 > 0) {
    // middle value of the sorted array if length is an odd number
    return arr[Math.floor(middle)];
  } else {
    // add two middle numbers ÷ 2
    return (arr[middle - 1] + arr[middle]) / 2;
  }
};

function customSort(a, b) {
  // use custom sort function to properly sort numbers
  return a - b
}



// ******************************

var findMedianSortedArrays = function (nums1, nums2) {
  var merged = [];
  while (nums1.length || nums2.length) {
    if (nums1.length && nums2.length) {
      if (nums1[0] < nums2[0]) {
        merged.push(nums1.shift());
      }
      else {
        merged.push(nums2.shift());
      }
    }
    else if (nums1.length) {
      merged = merged.concat(nums1.splice(0));
    }
    else {
      merged = merged.concat(nums2.splice(0));
    }
  }
  let answer;
  if (merged.length % 2 == 0) {
    let halfWayIndex = merged.length / 2;
    answer = (merged[halfWayIndex - 1] + merged[halfWayIndex]) / 2;
  }
  else {
    answer = merged[Math.floor(merged.length / 2)];
  }

  return answer;
};