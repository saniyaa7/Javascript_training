//Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

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