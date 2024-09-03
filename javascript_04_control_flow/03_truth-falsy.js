// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

//truthy values
// "0", 'false', " ", [], {}, function(){}


function returnSomething(){
    return true
}

// if(function(){}){
//     console.log('uiuigu')
// }else{
//     console.log('asdasd')
// }


if(returnSomething()){
    console.log('uiuigu')
}else{
    console.log('asdasd')
}