function printSomething() {
  let a = 20;
  let b = 30;
  let c = a * b;
  return c;
  //   return a*b;
  console.log("hi");
}

let result = printSomething();
// console.log(result);

function multiplyTwo(a = 21, b = 22) {
  // let a = 24
  //let b = 20
  // b = 32
  // 24 * 20
  return a * b;
}

// console.log(multiplyTwo(20, 30));
// console.log(multiplyTwo(22, 32));
// console.log(multiplyTwo(24));
// console.log(multiplyTwo(22, 32));
// console.log(multiplyTwo(undefined, 23));

function sum(a, ...c) {
  //   console.log(c); [4,5]
  console.log(...c); // 4 5
  let sum = a;
  c.forEach((val) => {
    sum += val;
  });
  console.log(sum);
  //   console.log(typeof c);
  //   return a + b;
}

// console.log(sum(2, 3));
// console.log(sum(3, 3));
// console.log(sum(2, 3, 4, 5));
// console.log(sum(2, 3, 4, 5));
// sum(2, 3, 4, 5);
// sum(2, 3, 4, 5, 6);
// sum(2, 3, 4, 5, 6, 7);

function randomParameter(a) {
  console.log(a);
}

randomParameter({
  name: "wribhu",
  age: 20,
});
randomParameter(20);
