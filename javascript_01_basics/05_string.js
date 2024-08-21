// let name = "wribhu"
// let name = new String('wribhu')
// console.log(name)


let name = 'sayani'
let score = 9.59
let sem = 5

console.log(name , 'got ', score, ' in sem ', sem)
// String interpolation
console.log(`${name} got ${score} in sem ${sem}`)

// `${variable }` <== placeholder


// 'wribhu' <= string
// ['w' , 'r' , 'i' , 'b' , 'h' , 'u'] == 6
let name1 = 'wribhu'
name1[2]
console.log(name1.charAt(2))
console.log(name1[2])
console.log(name1.indexOf('b'))

let newName = name1.substring(0 , 6)
console.log(newName)


let newSlice = name1.slice(-4, -3)
console.log(newSlice)

// 0   1   2   3   4   5
// w   r   i   b   h   u
// -6 -5  -4  -3   -2 -1

// console.log('wribhu \n nandi')

let newName1 = 'wribhu  nandi'
console.log(newName1.trim())

let newName2 = 'Sandip Ghosh123 456'
// ['Sandip' , 'Ghosh']
// console.log(newName2.replace('Sandip' , 'Sangeeta'))

console.log(newName2.split(' '))
console.log(newName2.split(' ', 1))

console.log(newName2.includes('123 4', 13))
let newName3 = 'Sandip-Ghosh123-456'
console.log(newName2.split('G'))