// 1. Closure
const first = () => {
    const greet = "Hi";
    const second = ()=> console.log(greet);
    return second;
}

const newFunc = first();
newFunc();



// 2. Currying

const multiply = () => a*b;

// Currying means we’re changing this function (multiply) to only accept one parameter at a time.

const curriedMultiply = (a)=>(b)=>(a*b);
curriedMultiply(3);
curriedMultiply(3)(4);


// Compose

const compose = (f, g) => (a) =>f(g(a));
const sum =(num) => num +1;
compose(sum, sum)(5);
