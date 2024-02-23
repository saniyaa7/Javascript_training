//Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment.

let {users2 } = require("./question2")

function sortFunc(users, key, order) {
  return users.sort(function (a, b) {
    var aValue = a[key];
    var bValue = b[key];

    if (order === "desc") {
      return bValue - aValue;
    } else {
      return aValue - bValue;
    }
  });
}

sortFunc(users2, "id", "desc")
console.log(users2)
sortFunc(users2, "first_name", "desc")
console.log(users2);