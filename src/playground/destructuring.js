// const person = {
//     name: 'Nahuel',
//     age: 28,
//     location: {
//         city: 'Elblag',
//         temp: 23
//     }
// };

// const { name: firstName = 'Anonymous',  age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location

// console.log(`It's ${temperature} degrees in ${city}`);

//-------------Object destructuring--------------
//challenge

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published'} = book.publisher

// console.log(publisherName); // Penguin, Self-published


//-------------Array  destructuring--------------

// const address = ['18 adama prochnika','Elblag', 'Gdansk', '82-300'];

// const [, city, region = 'Pomorskie'] = address;

// console.log(`You are in  ${city} ${region}.`)

//challenge

const item = ['Coffee (big)', '$2.00','$2.50', '$2.75']

const [coffeeType, , mediumPrice, bigPrice] = item

console.log(`A ${coffeeType} costs ${bigPrice} `)