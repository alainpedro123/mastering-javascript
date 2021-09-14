// Fetching a Data from API

const fetch = require('node-fetch');

// One way
const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}

// second way
const getPeople = async fetch => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const data = await getRequest.json();
    return {
        count: data.count,
        results: data.results
    }
}

//getPeople(fetch)

module.exports = {
    getPeople,
    getPeoplePromise
}


// Run node "filename"