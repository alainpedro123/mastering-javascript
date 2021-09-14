//We can use "this" keyword in a Globle Scope, Object (object method), Function, Class

//1. "THIS" INSIDE OF THE GLOBAL SCOPE

//house
this.table = 'window table';  //this.window = 'window table'
this.garage = { table: 'garage table' };

this.garage.table




//2. "THIS" INSIDE OF AN OBJECT - METHOD
let room = {
    table: 'blue table',
    watchTv(){ console.log(this) }
}

johnsRoom.watchTv()


//3. "THIS" INSIDE OF A FUNCTION
function playVideo(){
    console.log(this) // it refers the "window" object
}

playVideo();


//4. "THIS" INSIDE OF A CONSTRUCTOR FUNCTION

function Video(title){
    this.title = title;
    console.log(this);
}

const myVideo = new Video("FF9");



//5. "THIS" INSIDE OF A CLASS

this.table = 'window table';

class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
   
}

const newEmployee = new Person('Alain', 'Afonso');
console.log(newEmployee);
