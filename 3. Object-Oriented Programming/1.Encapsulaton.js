// 1. ENCAPSULATION - bundle the data and the methods that operate on the data in a single unit. The whole idea behind encapsulation is to hide the implementation details from users.

// Procedural Programming - without Encapsulation

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate){
    return baseSalary + (overTime * rate)
}


// Object-oriented Programming - Encapsulation


let employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate: 20,
    
    getWage: function(){
        return baseSalary + (overTime * rate);
    }
}

employee.getWage();


// 2. ABSTRACT

// 3. INHERITANCE

// 4. POLYMORPHISM