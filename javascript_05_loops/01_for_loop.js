// 1 -> 100000
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)


// for(initialization;condition;operation on operands)
for(i = 1; i <= 100;i = i +1){
    // console.log(i)
};
// for(;;); <== Infinit Loop
// for(;;){} <== Infinit Loop

// for( i = 0; i>=0;i++ ){}
// console.log('Hey')



for(i = 1;i <=5; i++){
    // break;
    if(i == 3) break;

    // console.log(i)
}

for(i = 1;i <=10; i++){
    // break;
    if(i == 5) continue;

    // console.log(i)
}

for (i = 1; i <= 5; i++){
    // i = 2
    for(j = 1; j<=10;j++){
        // console.log(`${i} X ${j} = ${i*j}`)
    }
}

let myArray = ["wribhu", "sayani", "ayandip"]
//              0          1         2
//Length        1          2         3

for(i = 0; i < myArray.length; ){
    console.log(myArray[i])
    i++
}