// const promiseReturnFunction1 = () => {
//     return new Promise((res) => setTimeout(res,1000,42))
// }
// const promiseReturnFunction2 = async () => {
//     const promise = promiseReturnFunction1()
// }

// promiseReturnFunction1()
// .then(value => console.log(value))
// promiseReturnFunction2().then(() => console.log('hello'))


function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  await asyncCall();