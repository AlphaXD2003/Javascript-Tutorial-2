//Do an async task
// DB calls, cryptography, network
// const promise = new Promise(function(resolve, reject){

//     setTimeout(function () {
//         console.log('done')
//         resolve(30)
//         // reject(new Error('Rejected the promise'))
//     },2000)
// })

// promise
// .then(function (value){
//     console.log('Promise resolved or fulfilled.',value)
// })
// .catch(function(e){
//     console.log('Promised is rejected')
//     console.log(e.message)
// })

// const error = false
//  new Promise(function(resolve, reject){
//     if(error){
//         reject(new Error('error'))
//     }else{
//         resolve({name: 'wribhu'})
//     }
// }).then(function(value){
// console.log(value)
// }).catch(function(err){
//     console.log(err.message)
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('hello')
//         resolve(30)
//     },2000)
// })
// .then(value => {
//     console.log(value)
//     new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log('hi')
//             resolve(30)
//         },1000)
//     })
//     .then(value => console.log(value))
//     .catch(err => console.log(err.message))
// })
// .catch(err => {
//     console.log(err.message)
// })

// const returnValue = new Promise((resolve, reject) => {
//     resolve(30)
// })
// .then(value => {
//     console.log(value)
//     return value + 1
// })
// .then(value => {
//     console.log(value)
//     return value +4
// })
// .then(value => console.log(value))

// console.log(returnValue)

// const promiseFunction = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(30);
//     });
//   }).then((value) =>
//     new Promise((res, rej) => {
//       res(31);
//     })
//   );
// };
// promiseFunction().then((value) => {
//   console.log(value);
// });



const promise1 = Promise.reject(3);
const promise2 = 42;
// const promise23 = new Promise((res, rej) => res(42))
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, new Error('error'));
});

// Promise.all([promise1, promise2, promise3])
// .then((data) => console.log(data))

// Promise.allSettled([promise1, promise2, promise3])
// .then((data) => console.log(data))

Promise.any([promise1, promise2, promise3])
.then((data) => console.log(data))

