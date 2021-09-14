let pageCounter = 1;
const animalContainer = document.getElementById("animal-info");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      renderHTML(data);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  request.onerror = () => {
    console.log("Connection error");
  };

  request.send();
  pageCounter++;
  if (pageCounter > 3) {
    button.classList.add("hide-me");
  }
});


function renderHTML(data) {
  let htmlString = "";

  for (let i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (let j = 0; j < data[i].foods.likes.length; j++) {
      if (j == 0) {
        htmlString += data[i].foods.likes[j];
      } else {
        htmlString += " and " + data[i].foods.likes[j];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}