/* String in Javascript are also built-in objects.
There are two types of Strings */

// 1. String primitive
const message = 'hi'
console.log(typeof message)   // string

// 2. String Objects
const message2 = new String('Hello')
console.log(typeof message2)  // object


const newMessage = "This a cool message";

// Methods
newMessage.length;
newMessage[0];
newMessage[1];
newMessage.includes('cool');
newMessage.startsWith('This');
newMessage.endsWith('this');
newMessage.indexOf('a')
newMessage.replace('cool', nice)
newMessage.toUpperCase();
newMessage.trim()   //gets rid of all white space before and after the message
newMessage.trimLeft()
newMessage.split(' ')

// Escape Notation
const newMessage = "This a cool\n message";


// Template Literals

const name ="Sally";
const age = 34;
const pet ="horse";

// without Template strings
const greeting = "Hello " + name + " you seem to be doing " + greeting + "!"; 

// with Template strings
const greetingBest = `Hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have got`;

const letter = 
`Hi ${name},

Thank you for emailing message2

Regards,
Alain`