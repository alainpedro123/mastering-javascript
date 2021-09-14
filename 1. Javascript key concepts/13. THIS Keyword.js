// "this" keyword references the object that is executing the current function:

const person = {
    name: 'Alain',
    walk(){
        console.log(this)
    }
}

// The value of this is determined by how a function is called
// 1. If this function is "a method" in an object -> "this" references the object that is executing the function

const video = {
	title: 'a'
	play(){ console.log(this) }
}

console.log(this)  // it refers to the object "video" itself

video.stop = function() { console.log(this) }
video.stop();


// If it's a regular function "this" references the "window" object and "global" in node
// 2.1. Example

function playVideo(){
	console.log(this) // it refers the "window" object
}

playVideo();

// BUT if we call a function using the "new operator" which is the case for Constructor Function, "this" will reference a new empty object
// 2.2. Example

function Video(title){
	this.title = title;
	console.log(this);
}

const myVideo = new Video("FF9");



// 3. "this" and a callback function
const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		this.tags.forEach(function(tag){console.log(this.title, tag)}, this)
	}
}

video.showTags();