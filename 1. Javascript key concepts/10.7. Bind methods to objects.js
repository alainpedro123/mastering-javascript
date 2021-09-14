// Binding a method (function) to an object
// Function in Javascript are objects, that have properties and methods we can use

const person = {
    name: 'Alain',
    walk(){
        console.log(this)
    }
}

person.walk(); 

// the bind method will return a new instance of this walk function and set "this" to point to the person object
 const walk2 = person.walk.bind(person) 

 // when calling a bind on the walk function we get a new walk function, and in this new walk function the value of "this" is based on the argument we passed to the bind method.

walk2(); 