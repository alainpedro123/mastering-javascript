const request = new XMLHttpRequest();
request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
request.onload = () =>{
	//const data = request.responseText;
	//console.log(data);

	const data = JSON.parse(request.responseText);
	console.log(data);
}
request.send();