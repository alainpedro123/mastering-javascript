const square = function (number) {
    return number * number;
}

// 1. Arrow function
const square = number => number * number;
console.log(square(5));

// 2. Usage of Arraow functions
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

// a) getting only the active jobs WITHOUT arrow functions
const activeJobs = jobs.filter(function (job) { return job.isActive; })

// b) getting only the active jobs WITH arrow functions
const activeJobs = jobs.filter(job => job.isActive);



// 3. Arrow Function and THIS Keyword
// Arrow function don't rebind the "this" keyword.

const person = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};

person.talk();