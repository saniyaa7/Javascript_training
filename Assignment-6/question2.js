// What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:

//Mutating Method modifies orignal array

// push --> add element in orignal array
let arr =["apple","mango","banana"];
arr.push("orange");
console.log(arr); //==> [ 'apple', 'mango', 'banana', 'orange' ] 

// pop --> remove element from orignal array
arr.pop();
console.log(arr); //==>[ 'apple', 'mango', 'banana' ] 

// sort -->sort orignal array
arr.sort();
console.log(arr); //==>[ 'apple', 'banana', 'mango' ]


//non mutating method returns new array instead of modifying the original array

let nums = [1,2,3,4,5]
//filter
let evenNumbers = arr.filter( (x) => x%2==0 );
console.log(evenNumbers); 

//find --> it will return the first element in the array which satisfy the condition.
let find = arr.find( (x) => x%2==0);
console.log(find); 

//map --> it will returns the new array with all the changed values
let mapArray = nums.map( (x) => x*2);
console.log(mapArray);