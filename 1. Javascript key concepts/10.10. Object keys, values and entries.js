let obj = { 
    username0: 'Alain', 
    username1: 'Pedro', 
    username2: 'Afonso' 
    } 

// 
Object.keys(obj).forEach((key, index)=> { 
    console.log(key, obj[key]); 
})

/*
Object.keys(obj).forEach((key, index)=> { 
    console.log(key, obj[key]); 
})

*/


Object.values(obj).forEach(value => { 
    console.log(value);
})

/*
Alain
Pedro
Afonso 
*/


Object.entries(obj).forEach(value => { 
    console.log(value); 
})

/*
Object.entries(obj).forEach(value => { 
    console.log(value); 
})	(2) ["username0", "Alain"]
(2) ["username1", "Pedro"]
(2) ["username2", "Afonso"]

*/



Object.entries(obj).map(value =>{ 
    return value[1] + value[0].replace('username', ''); 
})


// ["Alain0", "Pedro1", "Afonso2"]