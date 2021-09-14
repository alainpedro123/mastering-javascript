// Without Default parameters
function interest(principal, rate, years) {
	return principal * rate / 100 * years;
}

interest(10000, 3.5, 5);


// With Default Values
function interest(principal, rate = 3.5, years = 5) {  // giving the varbiables default values
	return principal * rate / 100 * years;
}

interest(10000);

// Once we give a parameter a default value, we should do the same to the following parameters located on its right side


// Default arguments (in the function)

function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have got`;
}
