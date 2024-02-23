// Write a function mapBy to convert an array of objects into an object mapped by the specified key:

let users1 = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
];

// function mapBy(users,key)
// {
//   return users1.reduce(function(res,curr){
//     res[curr[key]]=curr
//     return res;
//   },{})

// }
//   const output1=mapBy(users1,"first_name")
//   console.log(output1);
//output==> {
  // “Nicki”:{id:1, first_name:”Nicki”, ...},
  // “Raychel”:{id:2, first_name:”Raychell”, ...},
  //}

//Write a functiongroupBy to convert an array of objects into groups based on the specified key:
let users2 = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

// function groupBy(users,key)
// {
//   return users.reduce(function(res,curr){
//     res[curr[key]]=curr
//     return res;
//   },{})

// }
//   const output2=groupBy(users2,"gender")
//   console.log(output2);
//output==>{
//“Male”:[
// {id:1, first_name:”Nicki”, ...}, 
// {id:3, first_name:”Demetris”, ...}
//]
//“Female”:[
// {id: 2, first_name:”Raychel”, ...},
// {id: 4, first_name:”Amata”, ...}
//]
//}


//Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment.
// function sortFunc(users, key, order) {
//   return users.sort(function (a, b) {
//     var aValue = a[key];
//     var bValue = b[key];

//     if (order === "desc") {
//       return bValue - aValue;
//     } else {
//       return aValue - bValue;
//     }
//   });
// }

// sortFunc(users2, "id", "desc")
// console.log(users2)
// sortFunc(users2, "first_name", "desc")
// console.log(users2);

// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];
let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

function mergeById(userNames, userEmails) {
  const result = {};
  for (let i = 0; i < userNames.length; i++) {
    result[userNames[i].id] = {id:userNames[i].id,
      first_name: userNames[i].first_name,
    };
  }
  for (var key in userEmails) {
    result[userEmails[key].id].email = userEmails[key].email;
  }
  return Object.values(result);
}

const output3 = mergeById(userNames, userEmails);
console.log(output3);
// output ==>[
//   { id: 1, first_name: 'Nicki', email: 'ncrozier0@squarespace.com' },
//   { id: 2, first_name: 'Raychel', email: 'rmcgrady1@cpanel.net' },
//   { id: 3, first_name: 'Demetris', email: 'dkilshall2@elpais.com' },
//   { id: 4, first_name: 'Amata', email: 'abraiden3@canalblog.com' }
// ]

// Write a function to filter an array of strings to hold only unique values

let filteruniqueNames = (names) => {
  uniqueNames = names.filter((value,index,array)=> array.indexOf(value)===index);
  return uniqueNames;
}

let names = ["Saniya","Alfiya","Jhon","Saniya","Adam"];
console.log(filteruniqueNames(names));

//output ==> [ 'Saniya', 'Alfiya', 'Jhon', 'Adam' ]
