const numberArray = [1,2,3,4,5,6,7,8]

const newArr = []
// for(i = 0; i < numberArray.length; i++){
//     newArr.push(numberArray[i] * numberArray[i])
// }

// for(const number of numberArray)
//     newArr.push(number*number)

// numberArray.forEach(function(number, index, numberArray){
//     console.log(index)
//     newArr.push(number*number)
// })
// console.log(newArr)



// const printSum = (result) => console.log(result)
// const sum = (num1 , num2, cb) => {
//     let result  = num1 + num2
//     cb(result)
// }

// sum(3,5,printSum)
// 1, 2, 3, 4, 5, 6, 7 , 8

// const mapArray = numberArray.map((value, index ) => {
//     return value - 10
// })
const mapArray = numberArray.map((value, index ) => value -10).map(value => value +2).map(v => v*v)

// console.log(mapArray)

const arrayOfNumbers = [1,-2,4,-7,6,-9]
// const filteredArray = arrayOfNumbers.filter((value, index) => {
//     if(value >= 0) console.log(index)
//     return value >=0
// })
const filteredArray = arrayOfNumbers.filter((value, index) => {
    if(value >= 0) console.log(index)
        return value >=0
}).filter(value => value > 3)

console.log(filteredArray)
const mapArray1 = numberArray.map((value, index ) => value -10).map(value => value +6).filter(value => value >=0)
console.log(mapArray1)