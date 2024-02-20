/*1. What is the difference between ++i and i++?

==> The major difference between i++ and ++i is that i++ returns the value before it incremented 
whereas ++i returns the value after it is incremented. 
*/

let i=0;
console.log(i++); // ==>0
i=0;
console.log(++i); // ==>1

/*2. What do you think would happen if you pass an index beyond the range of the string? 
Or if you pass a negative index? Try it out.

==>
javascript will return undefined if access index is negative or beyond the range
*/

const arr=[1,2,3];
console.log(arr[1000]); //  ==> undefine
console.log(arr[-1]); // ==>undefine

/*3.Do you think JSON.stringify would work for arrays as well? What about nested objects? 
//What happens if we pass numbers, strings, undefined, null to JSON.stringify?

==> JSON.stringify is used to store the objects as string. It will also works for array.
it will also stringify the nested objects
*/

// const arr = [10,20,30];
console.log(JSON.stringify(arr))
console.log(JSON.stringify({ x: 5, y: 6 })); 
const obj={a:1,b:2,c:{c1:3.1,c2:3.2}}
console.log(JSON.stringify(obj)) // ==> Nested objects also get strinify
console.log(JSON.stringify(undefined)); // Output: "undefined"
console.log(JSON.stringify(null)); // Output: "null"


/*
4. What happens if you pass a regular/invalid JSON string to JSON.parse? 
What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?


==> When we pass invalid value to JSON.parse() it will throw error "not defined"
it will not execute the further code
*/
const obj1 = JSON.parse(josh); // it will throw an error
console.log(typeof obj1)






