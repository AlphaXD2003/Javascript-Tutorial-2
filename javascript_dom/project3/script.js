const div1 = document.getElementsByClassName('div1')[0]
const div2 = document.getElementsByClassName('div2')[0]
const onButtonClick = () => {
    console.log(div1.classList)
    // red div1 => yellow div1
    div1.classList.toggle('red')
}