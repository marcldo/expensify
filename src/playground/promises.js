const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('resolved');
    reject('Something went wrong');
  }, 1500);
});

console.log('Before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('Error is: ', error);
});

console.log('after');