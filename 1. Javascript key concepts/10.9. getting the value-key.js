const object = {
  key1: "value1", 
  key2: "value2", 
  key3: "value1",
  key4: "value2",
  key5: "value3"
}

function getKeyByValue(object, value) { 
    return Object.keys(object).find(key => object[key] === value); 
} 

function getValueByKey(object, key) { 
    return Object.values(object).find(value => object[value] === key); 
} 

getValueByKey(object, "key1");
