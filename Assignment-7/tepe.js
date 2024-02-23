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

const result={}
for(let i=0;i<userNames.length;i++)
{
    result[userNames[i].id] = {
      first_name: userNames[i].first_name
    }
}
// console.log(result)

// for(const [k,v] of Object.entries(result)){
  // console.log(`${k} : ${v}`)
// }

console.log(userEmails)
// for(var key in userEmails){
// //  console.log(key)
//   result[userEmails[key].id].email = userEmails[key].email
// }
// console.log(result)

// userEmails.forEach(key => {
//   console.log(key)
// })

// Iteration via:
/*
 - for Eachh
 - for i in ....
 - for var in iterable
*/