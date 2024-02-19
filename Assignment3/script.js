// 1. Declare a variable let age = 25;. Write a series of if else statements that will:

// Print child to the console if age is less than equal to 12.

// Print teen to the console if age is between 13 and 18 (inclusive).

// Print adult to the console if age is above 18

let age=25;
if(age<=12)
  console.log("child");
else if(age>=13 && age<=12)
  console.log("teen");
else
  console.log("adult");

  // 2. Do the same using switch case.
  
switch (true) {
  case age <= 12:
      console.log("child");
      break;
  case age >= 13 && age <= 18:
      console.log("teen");
      break;
  default:
      console.log("adult");
}

// 3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
let arraySize = 25;
let numbersArray = [];

for (let i = 1; i <= arraySize; i++) {
    numbersArray.push(i);
}
console.log(numbersArray);

//4. Accomplish the same using a while loop.

let i = 1;
let whileNumbersArray = [];

while (i <= arraySize) {
    whileNumbersArray.push(i);
    i++;
}
console.log(whileNumbersArray);

//5. Can you use return instead of break in loops?


function fun()
{
  for(let i=1;i<=10;i++)
  {
    if(i===5)
    {
      return "Loop stopped at 5";
    }
    console.log(i);
  }
}
fun()
