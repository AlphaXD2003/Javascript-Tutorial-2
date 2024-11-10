// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const wribhu = new User('wribhu', 'wribhu@13.com', 'password123')
// console.log(wribhu)


function User(username, email, password){
    console.log(this)
    this.username = username
    this.email = email
    this.password = password    
    console.log(this)

    return this
}

User.prototype.encryptPassword = function(){
    return this.password+'abcd'
}

const wribhu = new User('wribhu', 'wribhu@13.com', 'password123')

console.log(wribhu.encryptPassword())