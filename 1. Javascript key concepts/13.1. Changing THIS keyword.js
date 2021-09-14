// CHANGING THE VALUE OF THIS

const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		this.tags.forEach(function(tag){console.log(this.title, tag)}, this) // refering the object itself
	}
}


// Approach 1 - "self" - Not recommended!

const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		const self = this;
		this.tags.forEach(function(tag){console.log(self.title, tag)}) // refering the object itself
	}
}


// Approach 2 - setting the "this" argument for given function

function playVideo(){
	console.log(this)
}

// refering the object we're creating 
// call(), apply(), bind()

playVideo.call({ name: 'Alain'})
playVideo.apply({ name: 'Alain'})
playVideo.bind({ name: 'Alain'}) // bind - returns a new function and set this to point the created object permanently 

// refering the window object
playVideo();


// bind
const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		this.tags.forEach(function(tag){console.log(this.title, tag)}.bind(this)) // refering the object itself
	}
}



// Approach 3 - Arrow function - RECOMMENDED WAY
const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		this.tags.forEach(tag => {console.log(this.title, tag)}) // refering the object itself
	}
}



