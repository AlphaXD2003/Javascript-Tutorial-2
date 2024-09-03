// if (condition){
// // statement...
// }
// else{
// // statement...
// }


const a = true;
if(!a){
    console.log('True')
}else{
    console.log('False')
}

const score = 91

if(!(score >60)){
    console.log(`I scored more than 60`)
}else{
    console.log(`I scored less than 60`)
}

// !score >60
// false > 60
// 0 > 60

if(true){
    let x = 20
}

// console.log(x)

if(score >= 90){
    console.log('Grade A')
}
else if(score >= 80 && score < 90){
    console.log('Grade B')
}
else if(score >= 70 && score < 80){
    console.log('Grade C')
}
else if(score >= 60 && score < 70){
    console.log('Grade D')
}
else{
    console.log('Grade F')
}



// System

const isUserRegistered = true
const isUserLoggedIn = false
const isUserIssuedCard = true

if(isUserRegistered && isUserLoggedIn && isUserIssuedCard){
    console.log('You can buy')
}else{
    console.log('You cannot buy')
}

