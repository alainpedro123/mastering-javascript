// TYPESCRIPT

// 1. Boolean
let isCool: boolean = true;

// 2. Number
let age: number = 25;

let sum = (a: number, b: number): number => { // this function must return something (a number)
    return a + b;
}

// 3. String 
let eyeColor: string = 'brown';
let myQuote: string = `I'm not old, I'm inly ${age}`;

// 4. Array
const pets: string[] = ['cat', 'dog', 'pig'];
const pets2: Array<string> = ['lion, dragon', 'lizard'];

// 5. Object
let person: object = {
    name: 'John',
    age: 14
}

// 6. Null and Undefined
let meh: undefined = undefined;
let noo: null = null;

// 7. Tuple
let basket: [string, number] = ['basketball', 5];

// 8. Enum -> with this we can have different Data Structure that we can use to orgarnize the information for our program.
// Enum allows us to define a set of name to console
enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

let sizeName: string = Size[2];         // Medium
let sizeNumber: number = Size.Medium;   // 2 

// 9. Any - !!!! BE CAREFUL -> Use only when you make sure we're using it right.
let whatever: any = "ahhhhhhhhhhhhhhhh noooooooooooooooo!!!";
whatever = 5;
whatever = true;
whatever = Size.Small;
whatever = basket;

let arrayOfAnyType: any[] = [1, true, 'a', 'alain'];
let arrayOfAnyType2: Array<any> = [1, true, 'a', 'alain'];

// 10. Void - it's quite common when working with function
let sing = (): void => {
    console.log('alalalala')
}

// 11. Never -> it tests two things: 1) If a function never returns and 2) doesn't have an end point (usually throws an Error)

let error = (): never => {
    throw Error('Oopps')
}

// 12. Interface -> can be used really well with objects. Interfaces are purely for declaration, they cannot include any implementation 
// Recommended
interface RobotArmy {
    count: number,
    type: string,
    magic?: string // ? - means it may or not be part of the object, not obligatory
}

// This creates an object 'robots' with the following properties: "count, type, magic"
let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}

// This is the long version of the above
let fightRobotArmy2 = (robots: { count: number, type: string, magic: string }) => {
    console.log('FIGHT!')  
}

// Type - Not recommended
type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}

// Interfaces and Type -> Interfaces create a new name that we can use everywhere, like "RobotArmy", Type don't create a new name.

// 13. Type Assetion
// Type Assertion - allows us to override a type in any way we want. 

interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count;  // accessing the properties


// 14. Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('FIGHT!')
}

// This is the long version of the above
let fightRobotArmy4 = (robots: { count: number, type: string, magic: string }): number => {
    console.log('FIGHT!')
    return 5;
}


// 15. Class

class Animal {
    public sing: string = 'allalalalal' // public property
    private eat: string = 'meat'
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAAAWWWRR');
lion.sing; // accessing a public property
//lion.eat;  //Error: eat property is only accessible within the class Animal



// 16. Union 
let confused: string | number = "hello";
let confused2: string | number = 5;
let confused3: string | number | boolean = true;




// OTHERS
let a: number = 10;
let b: boolean = true;
let c: string = "name";
let array: number[] = [1, 2, 3, 4];
let f: any[] = [1, true, 'a', 'alain'];

enum Color { Red = 0, Green = 1, Blue = 3 }; // by default the values are assigned from 0
let backgroundColor = Color.Red;


// Inline Anotation 

let drawPoint = (point: { x: number, y: number }) => { }


// CLASS

class Point {
    constructor(public x?: number, private y?: number) {
    }

    draw() {
        console.log('X:' + this.x + ', Y: ' + this.y);
    }

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0');

        this.x = value;
    }
}

let point = new Point(1, 2);
point.draw();
let x = point.X;
point.X = 10;