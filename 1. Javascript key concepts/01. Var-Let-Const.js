/*
1. VAR - this variable is accessible inside of the function in which is defined. This variable is scoped to the function.
- global-scoped
- function-scoped

*/

// Example 1:
{
   var greet = "Hello"

   if(true)
   var message = "Hi there"
}

console.log(greet)		// It's accessible
console.log(message)	// it's accessible


// Example 2:

function testing(){
   var greet = "Good morning!"

   if(true){
      var message = "Hi there"
   }

  console.log(message); // // Here is accessible - Because VAR is not block-scoped

}
	
console.log(greet)		// Not accessible! - Because VAR is function-scoped
console.log(message)	// Not accessible! - - Because VAR is function-scoped


// Example 3: 

function sayHello(){
    for(var i=0; i<5; i++){
        console.log(i)
    }
    console.log(i)
}
sayHello();


 // Example 4: - "ATTACHED" to the windows object

var color = 'red';
window.color


/*
2. LET, CONST - this variable is only accessible inside of that block. These variables are scoped to the block in which they are defined.
- global-scoped
- function-scoped
- block-scope: for loop, while loop, if-else, etc
*/

// Example 1:
{
   const greet = "Good morning!"

   if(true){
      let message = "Hi there"
   }
}

console.log(greet)			// Not accessible
console.log(message)		// Not accessible


// Example 2:
function sayHello(){
    for(let i=0; i<5; i++){
        console.log(i)
    }
    console.log(i)  		// "i" is accessible only inside the for loop block, here is not long accessible
}

sayHello();


// Example 3: - "NOT ATTACHED" to the windows object

let age = 14;
window.age



