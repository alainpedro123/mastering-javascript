// 6 a)
function fibonacciRecursive(n) {  // O(2^N) 
  if(index === 0)
    return 0;
  
  if(index === 1 || index === 2)
    return 1;
  
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

fibonacciRecursive(3)


// 6 b)
function fibonacciIterative(n) {  // O(n)
  if(index === 0)
    return 0;
  if(index === 1 || index === 2)
    return 1;
  
  let array = [0, 1]; // the first two Fibonacci numbers are 0 and 1
  for(let i = 2; i <= index; i++)
    array.push(array[i - 1] + array[i - 2]); // each value is the sum of the 2 previous values
  
  //console.log(array);
  return array[index];
}

fibonacciIterative(3);