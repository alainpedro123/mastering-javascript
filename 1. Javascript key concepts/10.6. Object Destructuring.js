//  Extracting the value of the properties of the object below, and store them at a separate variables

const address = {
    street: 'Odolanska',
    city: 'Warsaw',
    country: 'Poland'
};

// No Destructuring
const street = address.street;
const city = address.city;
const country = address.country;

// Destructuring 
const { street, city, country } = address;

// Destructuring + declaring a new value "st" and setting this to "street" property 
const { street: st } = address;