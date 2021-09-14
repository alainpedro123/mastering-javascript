// Instantiation - is when you make a copy of the object and reuse the code. It consists in making instance in another words a multiple copies of the object.

class Player{ 
    constructor(name, type){
    this.name = name; // property on the player object 
    this.type = type; // property on the player object 
    } 
    introduce(){ 
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`); 
    } 
}   
//creating a new player 
class Wizard extends Player{
    constructor(name, type){ 
    super(name, type) 
// super is a constructor function, by means of this we can grab the previous class properties. Super calls the constructor of the component. 
    } 
    play(){ 
         console.log(`Hey, I'm a ${this.type}`) 
    } 
} 
//creating new objects of class Wizard 
const wizard1 = new Wizard('Shelly', 'Healer'); 
const wizard2 = new Wizard('Shawn', 'fighter');
