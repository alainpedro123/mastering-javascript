function solution(num1, num2){
 if(num1 < 0 || num2 < 2)
   return "Enter a positive number";
 
 if (typeof num1 !== 'number' || typeof num2 !== 'number')
   return "Enter a valid number";
 
 const binary = dec2bin(num1 * num2);
 const array = binary.toString().split("");
  let count = 0;
 for(let i = 0; i < array.length; i++)
   if(array[i] === "1")
     count++;
 
 return count;
}
 
 
function dec2bin(dec){
 return (dec >>> 0).toString(2);
}
 
solution(3, 1);