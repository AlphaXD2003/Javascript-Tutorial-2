const btn = document.getElementById('btn')
console.log(btn)

const counter = document.getElementById('counter')
console.log(counter.innerText)

let count = 0

btn.addEventListener('click' , function(){
    
    counter.innerText = `Count : ${++count}`
})