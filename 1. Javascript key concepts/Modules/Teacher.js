import { Person } from './Person';

export function promote(){
  //  
}

// class 2 - Teacher
export class Teacher extends Person{
    constructor(name, degree){ 
        super(name);   
        this.degree = degree;
    }
    teach(){
        console.log("I love teaching");
    }
}

