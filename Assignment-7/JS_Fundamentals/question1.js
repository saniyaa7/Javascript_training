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

function mapBy(users,key)
{
  return users1.reduce(function(res,curr){
    res[curr[key]]=curr
    return res;
  },{})

}
  const output1=mapBy(users1,"first_name")
  console.log(output1);

//output==> {
//   Nicki: {
//     id: 1,
//     first_name: 'Nicki',
//     email: 'ncrozier0@squarespace.com',
//     date_of_birth: '2009/05/09'
//   },
//   Raychel: {
//     id: 2,
//     first_name: 'Raychel',
//     email: 'rmcgrady1@cpanel.net',
//     date_of_birth: '1996/11/05'
//   }
// }
