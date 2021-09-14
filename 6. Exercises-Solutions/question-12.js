// function that find the first non repeating character in the string.
const string = "a green apple";

function firstRecurring(string){
  const array = string.toString().split("");
  let map = new Map();

  for(let char of array){
    let appeareanceNumber = map.has(char) ? map.get(char) : 0;
    map.set(char, appeareanceNumber + 1)
  }
  for(let char of array)
    if(map.get(char) === 1){
    console.log(map)
    return char
    }
  return ""
}

firstRecurring(string);