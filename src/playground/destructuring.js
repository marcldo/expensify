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

const { name: publisherName = 'Anonymous' } = book.publisher;
console.log(publisherName);