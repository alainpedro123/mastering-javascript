// Sorting a two dimensional Array

const list  = [
  // [name, relevance, price]   
      ["Sofa", "5", "4500"], 
      ["Bed", "3", "2100"],
      ["Phone", "1", "3000"] 
];

function itemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber){
  sortByParameter(items, sortParameter);
  sortByOrder(items, sortOrder);

  const result = [];
  for(let i = 0; i < itemsPerPage; i++)
    result.push(items[i][0])
  return result;
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

  if(sortParameter === 1){  // Sort by relevance
    items.sort(function(a,b){
      return a[1] - b[1];
    });
  }

  if(sortParameter === 2){
    items.sort(function(a,b){  // Sort by price
      return a[2] - b[2];
    });
  }
}

function sortByOrder(items, sortOrder){  // Sorting only the names
  if(sortOrder === 0)  // Ascending Sort order
    return items.sort();
  
  if(sortOrder === 1){  // Descending Sort order
    items.sort(function(a,b){
      return a > b ? -1 : b > a ? 1 : 0;
    })
  }
}

itemsToDisplay(list, 1, 1, 3, 1);