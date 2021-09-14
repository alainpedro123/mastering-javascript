// BREAK
// Breaking out of the loop when counter is equal 5

let counter = 10;
while(counter > 0){
    if(counter === 5) 
        break
    console.log(counter);
    counter--;
}


// CONTINUE
// Getting the odd numbers 

let counter = 0;
while(counter < 10){
    if(counter % 2 === 0){ 
        counter++;
        continue;
    }
    console.log(counter);
    counter++;
}