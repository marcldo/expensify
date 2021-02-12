//Object destructuring

const person = {
  name: 'Mike',
  age: 20,
  location: {
    city: 'Toronto',
    temp: -10
  }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}`);

const { city, temp: temprature } = person.location;
if (city && temprature) {
  console.log(`It's ${temprature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

console.log(`You are in ${address[1]} ${address[2]}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);