const wribhu = document.getElementById('wribhu')
// console.log(wribhu.nextSibling)
// console.log(wribhu.nextElementSibling)
const sayani = document.getElementById('sayani')
// console.log(sayani.nextSibling)
// console.log(sayani.nextElementSibling)

function returnSwapped(elementNode){
    if( elementNode.innerText === "Wribhu") return "Sayani"
    else if(elementNode.innerText === "Sayani") return "Wribhu"
}   
const btn = document.getElementById('btn')
btn.addEventListener('click' , () => {
sayani.innerText = returnSwapped(sayani)
wribhu.innerText = returnSwapped(wribhu)
})