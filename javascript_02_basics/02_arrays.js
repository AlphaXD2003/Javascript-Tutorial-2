const name1 = ['ayandip' , 'sayani', 'wribhu']
const name2 = ['ayandip1' , 'sayani1', 'wribhu1']
// name1.push(name2)
// console.log(name1)

const name4 = ['ayandip2' , 'sayani2', 'wribhu2']
const name3 = name1.concat(name2).concat(name4)
const name5 = [...name1, ...name2, ...name3]
console.log(name5)


const num1 = [1,2,3, [4,5,[6,7,[8,9]]]]
console.log(num1.flat(2))
console.log(num1.flat(Infinity))

console.log(Array.isArray('wribhu'))
console.log(Array.isArray(num1))

console.log(Array.from('wribhu'))
// To be continued on objects....
console.log(Array.from(
    {
        name: 'wribhu'
    }
))

let number1 = 20
let number2 = 30
let number3 = 50
const numberArray = [number1, number2, number3]
console.log(Array.of(number1, number2, number3))