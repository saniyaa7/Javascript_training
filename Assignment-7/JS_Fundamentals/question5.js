// Write a function to filter an array of strings to hold only unique values

let filteruniqueNames = (names) => {
  uniqueNames = names.filter((value,index,array)=> array.indexOf(value)===index);
  return uniqueNames;
}

let names = ["Saniya","Alfiya","Jhon","Saniya","Adam"];
console.log(filteruniqueNames(names));

//output ==> [ 'Saniya', 'Alfiya', 'Jhon', 'Adam' ]
