// class 1 - Person
class Person{
    constructor(name){ 
        this.name = name;
    }

    walk(){
        console.log("walk");
    }
}

// class 2 - Teacher
// "Teacher" inherits all the methods defined in "Person" class

class Teacher extends Person{
    constructor(name, degree){ // Whenever we add a constructor in a child class we need to call the constructor of its parent class.
        super(name);    // we do it by calling the super method.
        this.degree = degree;
    }
    teach(){
        console.log("I love teaching");
    }
}

// creating a teacher object

const teacher = new Teacher("Fernando", "MSc");
teacher.walk(); // the inherited method