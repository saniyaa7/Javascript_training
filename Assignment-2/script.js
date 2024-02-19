//1. Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const
let a 
console.log(a);
a=10
console.log(a);

// const b  // cannot define without initilizing
// b=10
// console.log(a);

//2.Use the typeof operator to find the types of different variables. Specially note what the typeof operator returns for arrays, null values and NaN. 

let name="Saniya"
console.log("type of name: ",typeof name);
let y=true
console.log("type of y: ",typeof y);
let z=23.23
console.log("type of z: ",typeof z);
let ar=[1,"first",true]
console.log("type of array: ",typeof ar);
let null_element=null
console.log("type of null_element: ",typeof null_element);
let p=NaN
console.log("type of NaN",typeof p);

//3. How can you find if a variable is an array or NaN besides typeof?
let str = 'This is a string';
    let num = 25;
    let arr = [10, 20, 30, 40];
 
    let ans = Array.isArray(str);
    console.log("Output for String: " + ans);
 
    ans = Array.isArray(num);
    console.log("Output for Number: " + ans);
 
    ans = Array.isArray(arr);
    console.log("Output for Array: " + ans);

//4. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases?

let arr1 = [1,2,3,4,5];
const arr2 =[5,4,3,2,1];
arr1.push(100);
arr2.push(300);
console.log("After push\narr 1:",arr1,"\narr 2:",arr2)
arr1.pop();
arr2.pop();
console.log("After pop\narr 1:",arr1,"\narr 2:",arr2)
arr1.shift();
arr2.unshift(4,5);
console.log("shift arr 1:",arr1,"\nunshiftarr 2:",arr2)


let person ={
    name:"saniya chaudhari",
    age:20,
    marks:99
}
console.log("person object:",person)

// When we declared object as let we can perform all the operation and reassignment is allowed while 
// reassignment is not allowed when we declare object as const 

