// 1.

// Two different objects with the same property/method

const person = {
    name: "Alain",
    walk(){
        console.log("walk");
    }
}

const person2 = {
    name: "Alain",
    walk(){
        console.log("walk");
    }
}

// When we have an object with at least one method, we need a blueprint to create objects of that type.
// For this reason we use Classes

// 2. Using a class - 

// a) Creating a class - Blue print to create a person object
class Person{
    constructor(name){ // passing the name from outside
        this.name = name;  // setting the name property of that object to this name argument we're receiving
    }

    walk(){
        console.log("walk");
    }
}

// b) create a Person Object
const Person = new Person("Alain");
person.walk();



// the "class Person" is equivalent to a "Function Person" with argument "name"
// Ex. class Person(name) = Function Person(name)


// Classes - Super
// The parent class can be referenced using super() .
