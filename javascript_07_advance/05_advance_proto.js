const User = {
    name: 'wribhu',
    email: 'wribhu@123.xyz'
}

const Teacher = {
    name: 'BKP',
    email: 'bkp@123.xyz'
}
const user = function (){}
Teacher.__proto__ = User;
Object.setPrototypeOf(Teacher, User)
// Teacher.__proto__ = user;
console.log(Teacher) 

const abc = Object.setPrototypeOf({}, Teacher);
console.log(abc)

String.prototype.returnLength = function(){
    return this.trim().length;
}

const mystring = 'wribhu'
console.log(mystring.returnLength())