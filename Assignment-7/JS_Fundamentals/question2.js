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

function groupBy(users,key)
{
  return users.reduce(function(res,curr){
    res[curr[key]]=curr
    return res;
  },{})

}

const output2=groupBy(users2,"gender")
console.log(output2);

module.exports = {users2}
// //output ==> {
//   Male: {
//     id: 3,
//     first_name: 'Demetris',
//     email: 'dkilshall2@elpais.com',
//     date_of_birth: '2018/12/31',
//     gender: 'Male'
//   },
//   Female: {
//     id: 4,
//     first_name: 'Amata',
//     email: 'abraiden3@canalblog.com',
//     date_of_birth: '2012/05/23',
//     gender: 'Female'
//   }
// }
