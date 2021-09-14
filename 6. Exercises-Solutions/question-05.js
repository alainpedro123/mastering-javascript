// 5 a).
function findFactorialRecursive(number) { //O(n)
  if(number < 0)
    return "Enter an integer number greater than 0";

  if(number === 0 || number === 1)
    return 1;

  if(number === 2)
    return 2;

  return number * findFactorialRecursive(number - 1);
}

findFactorialRecursive(5);



// 5 b).
function findFactorialIterative(number) {  //O(n)
  if (number < 0)
    return "Enter an integer number greater than 0";

  if (number === 0 || number === 1)
    return 1;

  if (number === 2)
    return number;

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result
}

findFactorialIterative(3);