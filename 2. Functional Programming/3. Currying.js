// Currying

// a) Arrow Function
const multiply = a => b => c => (a*b*c);
multiply(3(4)(1);

// b) Normal Function
function multiply(a){
	return function(b){
		return function(c){
			return a * b * c;
		}
	}
}

multiply(2)(2)(1);

// Without currying 
function multiply(a, b, c){
	return a * b * c;
}

multiply(2, 3, 4);