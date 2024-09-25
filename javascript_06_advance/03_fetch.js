// fetch('https://jsonplaceholder.typicode.com/users',{
//     method: 'GET'
// })
// .then(response => {
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log(err.message))

const getAllUser = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{method: 'GET'});
        const data =  await response.json()
        console.log(data)
    }catch(e){
        console.log(e.message)
    }finally{
console.log('I am done')
    }
}

getAllUser()