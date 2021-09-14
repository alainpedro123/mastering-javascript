const first = () => {
    const greet = "Hi";
    const second = ()=> console.log(greet);
    return second;
}

const newFunc = first();
newFunc();
