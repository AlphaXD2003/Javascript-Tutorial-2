const newNumber = [1,2,3,4,5,6,7,8,9,10]

// const reducedNumber = newNumber.reduce(function(acc, curr){
//     return acc + (curr/2)
// } , 0)
const reducedNumber = newNumber.reduce((acc, curr) => acc + curr , 0)

console.log(reducedNumber)