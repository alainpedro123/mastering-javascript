//Abstraction means hide the details and complexities and show only the essentials
// not all the members/methods/properties should be accessible to the client 
// IMPLEMENTATION OF ABSTRACTION

function Circle(radius){
    this.radius = radius;
    
/*  this.defaultLocation = { x: 0, y: 0 }; // before the implementaion */
    let defaultLocation = { x: 0, y: 0 };  // after the implementation - this becomes a private method
 
/*  this.computeOptimumLocation = function(factor){ // before the implementation 
    	// ...
    }
*/
    let computeOptimumLocation = function(factor){ // after the implementation 
    	// ...
    }

    this.draw = function(){ // this function will be able to access all the local variable variable defined in its scope as well as the variable define in its parent "Function Circle"
    /*  this.computeOptimumLocation(0.1);  // before */
    	computeOptimumLocation(0.1) ;       //after - CLOSURE
    	// defaultLocation
    	// this.radiu

        console.log("drawing");
    } 
}

const circle = new Circle(10);
circle.draw();
circle.radius;

// Closure - Having two functions the parent and the child, by means of closure it's determined what variables will be accessible to the inner function (the child function)