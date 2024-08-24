let date = new Date()
// `2024-08-24T04:17:01.778Z`
console.log( date)
console.log(typeof date)
console.log( date.toString() ) //Sat Aug 24 2024 09:49:41 GMT+0530 (India Standard Time)
console.log( date.toDateString() ) //Sat Aug 24 2024
console.log( date.toTimeString() ) //09:54:36 GMT+0530 (India Standard Time)

const newDate1 = new Date(2024, 8, 24 )
console.log(newDate1)

const newDate2 = new Date(2024, 8, 24 , 9, 59,23 )
console.log(newDate2)

const newDate3 = new Date("2024-08-24T10:02:31.002Z" )
console.log(newDate3.toLocaleString(
    {

    }
))

const newDate4 = Date.now()
const newDate5 = new Date(newDate4)
console.log(newDate5.getTime())
console.log(Math.floor(Date.now() / 1000))

console.log(newDate5.toLocaleString())
console.log(newDate5.toLocaleString('default', {
    weekday: 'short',
    day: '2-digit',
    second: 'numeric',
    month: 'narrow',
   
}))
