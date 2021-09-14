// Sorting a two dimensional Array

const list = [
// [name, relevance, price] 
    ["Sofa", "5", "4500"], 
    ["Bed", "3", "2100"],
    ["Phone", "1", "5000"], 
    ["Table", "4", "3100"], 
    ["Mirror", "2", "100"],
    ["TV", "2", "50"]
];

function isValidInput(itemsLength, sortParameter, sortOrder, itemsPerPage, pageNumber){

  if(itemsLength < 1  || itemsLength > 100000){
    console.error("Invalid items length! Please insert an integer between 1 and 100000.");
    return false;
  }

  else if(sortParameter < 0  || sortParameter > 2){
    console.error("Invalid sortParameter! Please insert an integer between 0 and 2.");
    return false;
  }    

  else if(sortOrder !== 0  && sortOrder !== 1){
    console.error("Invalid sortOrder! Please insert 0 for Ascending or 1 for Descending.");
    return false;
  }

  else if(itemsPerPage < 1  || itemsPerPage > 20){
    console.error("Invalid itemsPerPage! Please insert an integer between 1 and 20.");
    return false;
  }

  else if(pageNumber < 0  || pageNumber > 10){
    console.error("Invalid pageNumber! Please insert an integer between 0 and 10.");
    return false;
  }
  
  else
    return true;
}

function itemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber){

  let validInput = isValidInput(items.length, sortParameter, sortOrder, itemsPerPage, pageNumber), numberOfPages =  Math.floor(items.length/itemsPerPage);

  if (!validInput)
    return;

  sortByParameter(items, sortParameter);
  sortByOrder(items, sortOrder);

  let result = [], arrayItemsPerPage = {};

  for(let i = 0, tmp=0; i < numberOfPages; i++ ){
    
    for(let j = 0; j < itemsPerPage; j++, tmp++ )
      if(tmp !== items.length){
      result.push(items[tmp][0]) 
      }     

      arrayItemsPerPage[i] = result; 
      result = [];   
  }
  
  console.log(arrayItemsPerPage);

  return arrayItemsPerPage[pageNumber];
}

function sortByParameter(items, sortParameter){
  if(sortParameter === 0){ // Sort by name
    const unsorted = [];

    for(let i = 0; i < items.length; i++)
      unsorted.push(items[i][0]);

    let sorted = unsorted.sort();

    for(let i = 0; i < sorted.length; i++)
      items[i][0] = sorted[i]
  }

  if(sortParameter === 1){ // Sort by relevance
    items.sort(function(a,b){
      return a[1] - b[1];
    });
  }

  if(sortParameter === 2){
    items.sort(function(a,b){ // Sort by price
      return a[2] - b[2];
    });
  }
}

function sortByOrder(items, sortOrder){ // Sorting only the names
  if(sortOrder === 0) // Ascending Sort order
    return items.sort(function(a,b){ //.sort();
      return a - b;    
    });

  if(sortOrder === 1){ // Descending Sort order
    items.sort(function(a,b){
      return b - a; // a > b ? -1 : b > a ? 1 : 0;     
    })
  }
}

//itemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber)
itemsToDisplay(list, 0, 0, 3, 0);