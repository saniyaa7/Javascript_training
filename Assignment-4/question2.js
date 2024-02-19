// Take a function that accepts a function as a parameter (also known as callback function). 
// function test(callback){
//  callback();
// }
// function callbackFunc(){
//  console.log(“Calling the callback function”)
//  return 5;
// }
// Explore the following cases - what is printed in the console, and what gets returned:
// test(callbackFunc)
// test(callbackFunc())
// test(() => callbackFunc())
// What happens when you return callback() from the test function?
// What happens when you return callback from the test function?


function test(callback){
  callback();
 }
 
function callbackFunc(){
  console.log("Calling the callback function");
  return 5;
 }

 //test(callbackFunc); // ==> function is passed as an argument
 //test(callbackFunc()); // ==> return value of callbackFunc() is passed as an argument
test(()=>callbackFunc()); //==> argument will be passed as an anonymous function and will be called within the test function 

// What happens when you return callback() from the test function?
// ==> callback() will return 5
// What happens when you return callback from the test function?
// ==> callback will return [Function]