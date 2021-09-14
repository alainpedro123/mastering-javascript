// For await of - it allows us to loop through our async await calls. Previously there was for of but now there’s for await of. 

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]


// 1. Using FOR-OF
const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}



// 2.1. WITHOUT For await of 
const getData = async function(){
	try {
		const [ users, post, albums ] = await Promise.all(
			urls.map(async function(url){
				const response = await fetch(url);
				return response.json();
			})
		)
		console.log('users', users);
		console.log('posts', posts);
		console.log('albums', albums);
	} catch(err){
		console.log('ooooooops', err);
	}
}

getData()


// 2.2. WITH For await of
const getData2 = async function(){
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises){
		const data = await request.json();
		console.log(data);
	}
}