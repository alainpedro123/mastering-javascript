// POLYMORPHISM - overiding in this child class a method that have been created in the Parent Class

class Animal{
	constructor(name){
		this.name = name;
	}

	makeSound(){
		console.log("Generic Animal Sound!!")
	}
}

class Dog extends Animal{
	constructor(name){
		super(name);
	}

	makeSound(){  // POLYMORPHISM - overiding the "makeSound" method
		console.log("Woof! Woof!")
	}
}


