
// 3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () =>{
  return new Promise((resolve, reject) =>{
  if (Math.random() > 0.5) {
  resolve('Test Resolve');
  } else {
  reject('Test Reject');
  }
  }).catch((err) =>{
  console.log('Error caught in testAsyncFunction: ', err);
  });
  };
  testAsyncFunction()
  .then((res) =>{
  console.log('Response in then block: ', res);
  })
  .catch((err) => console.log('Error in catch block: ', err));
  
  //  Output when the promise resolves is "Response in then block:  Test Resolve"
  // Output when the promise is rejected is "Error caught in testAsyncFunction:  Test Reject Response in then block:  undefined"