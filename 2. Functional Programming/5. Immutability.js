let name = "alain";
let newName = name.toUpperCase();  // a we get a new string, the original one is not affected.

// In Javascript object and array are not immutable. If we have an object or an array we can change them directly. 

let book = {}
book.title = "...";

// Javascript is not a Pure Functional Programming Language. In Pure Functional Languages we cannot mutate data.