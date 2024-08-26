const myObj1 = {
    name : 'wribhu',
    friendName: 'sayani'
}
// const myJson = require('./test.json')
// const myJson1 = require('./pterodactyl.nests.json')
// console.log(myJson)
// console.log(JSON.parse(myObj1)) <= error
// console.log(typeof JSON.stringify(myObj1))
// console.log(typeof myObj1)

// console.log( String(JSON.stringify(myObj1)))
// console.log( myObj1)


const myObj2 = {
    'first name' : 'wribhu',
    'last name': 'nandi'
}

console.log(myObj2['first name'])
console.log(myObj2['last name'])

const mySym = Symbol('mykey1');


const myRandomOb = {
   [mySym] : 'value1',
   name : 'jani na',
}

console.log(myRandomOb)