//for of
// array, Map

const array = ["a","b","c","d"]
// for(let i = 0; i < array.length; i++)
//     console.log(array[i])

// for(const elem of array)
//     console.log(elem)

const myname = "subhamoy"
// for(const letter of myname)
//     console.log(letter)


const map = new Map()
map.set("a",1)
map.set("b",2)
map.set("c",3)
// console.log(map)
// console.log(typeof map)
for(const [key, value] of map)
    console.log(`${key}:${value}`)
const anotherObj1 = {1: "a",3:"c", 2:"b"}
console.log(anotherObj1)

// for(const i of anotherObj1)
//     console.log(i)
for(const i of Object.keys(anotherObj1))
    console.log(i)
for(const i of Object.values(anotherObj1))
    console.log(i)