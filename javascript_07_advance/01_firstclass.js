class Customer {
    constructor(){

    }
    constructor(name, email, pno, atmpin){
        console.log()
        this.name = name
        this.email = email
        this.pno = pno
        this.atmpin = atmpin
      
    }

     insertATM(){
        console.log('Inserting atm for ', this.name)
    }
}

const wribhu = new Customer('wribhu', 'wribhu@gmail.com', 123567890 , 123)
// console.log(typeof wribhu)
console.log(wribhu.pno)

console.log(wribhu)
wribhu.insertATM()
const sayani = new Customer()

console.log(sayani)



/*

//Demo
class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
changeName(name){
    this.name = name;
}
}

const wribhu = new Polygon()
wribhu.changeName('wribhu')
*/