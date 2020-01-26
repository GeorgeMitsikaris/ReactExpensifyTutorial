const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
          // resolve({name: 'George', age: 50});
          reject('Error from the promise');
     }, 1500);
})

console.log('Before');
// promise.then(data => {
//      console.log(data.name);
//      console.log(data.age);
// })
promise.catch(data => {
     console.log(data);
})
console.log('After');