// const Person = {
//     name: 'George',
//     age: 50,
//     location: {
//         city: 'Nea Ionia',
//         street: 'Halkis 49'
//     }
// } 
// const {name: myName = 'ANON', age, location} = Person;
// const {city, street} = Person.location;
// console.log(`${myName} is ${age} years old and lives in ${street} ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// const Address = ['Halkis 49', 'Nea Ionia', 'Greece', '14232'];
// const [street, city, country, postcode] = Address;

// console.log(`Your are living in ${street} ${city}`)

const item = ['Coffee (hot)', '2,50', '2.80', '3.00'];

const [coffee,,medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);