/*

Finally – allows us to do something after a promise is finished. It will be always called no matter what whether resolved or rejected.
Finally doesn't receive any parameter from the promise and is so useful for those time that we have to run a piece of code no matter what, such as "sending an email to the user regardless of whether their request was successful or failed".

*/

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(array => {
    //throwing Error
    throw Error;
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
})
.catch(error => console.log('ughhh fxix it!', error))
.finally(data => console.log('extra', data))
