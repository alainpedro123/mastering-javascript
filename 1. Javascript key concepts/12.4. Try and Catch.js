// Try and Catch - Error Handling
// This technique is called defensive programming - it consists in making sure that the values we're passing in are valid.

const person = {
	firstName: 'Alain',
	lastName: 'Afonso',
	get fullName() { //getter
		return `${person.firstName} ${person.lastName}`
	},
	// ensuring that the parameters we're passing is a string
	set fullName(value) {
		if (typeof value !== 'string')
			throw new Error('Value is not a string.')  // throwing an exception

		// ensuring that the user entered the first and lastname
		const parts = value.split(' ');
		if (parts.length !== 2) // something is missing
			throw new Error('Enter a first and last name.')

		this.firstName = parts[0];
		this.lastName = parts[1];
	}
}

// receiving the exception
try {
	person.fullName = null   // setter	
}
catch (e) {
	alert(e)
}

console.log(person); 