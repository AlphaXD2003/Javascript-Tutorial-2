// function randomParameter(a) {
//     console.log(a);
// }

const randomParameter = (a) => {
  console.log(a);
};

// randomParameter(20);

function one() {
  const username = "wribhu";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  two();
}
// one();

// hoisting
// const sum1 = (a) => {
//   return a + 1;
// };
// console.log(sum1(5));
function sum1(a) {
  return a + 1;
}

// console.log(a);
// var a = 2; <== undefined
// let a = 2;  <== error
// const a = 2; <== error

const client = {
  name: "wribhu",
  salary: 100000,
  greet: function () {
    // console.log(this);
    const greet1 = () => {
      console.log(`${this.name} got ${this.salary}`);
    };
    greet1();
  },
};

// console.log(this);
// client.greet();
// this.name = "sayani";
// this.salary = 100000;
// console.log(this);
// client.greet();

const sum2 = (a, b) => a + b;
const sum23 = (a, b) => ({ name: "wribhu" });

console.log(sum2(4, 5));
console.log(sum23(4, 5));
