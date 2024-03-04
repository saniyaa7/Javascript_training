//Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading. 
//Add a button to sort the users by name. Add an input to filter the table by search. (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)
async function fetchData(){
  const url = "https://dummyjson.com/users"
  try {
      const response = await fetch(url)
      const data = await response.json()
      return data.users
  } catch (error) {
      console.log("Error is: " , error);
  }
}


async function addValueIntoTable(){
  const userData = await fetchData()
  const userTable = document.getElementById('tableBody')

  userTable.innerHTML = ""

  userData.forEach((user) => {
      const row = document.createElement('tr')
      row.innerHTML = `<td>${user.id}</td>
                       <td>${user.firstName}</td>
                       <td>${user.lastName}</td>
                       <td>${user.email}</td>`;
      userTable.appendChild(row)
  });

  document.getElementById('loading').style.display = 'none';
}


function sortByFirstName(){
  const userTable = document.getElementById("tableBody")
  const rows = Array.from(userTable.children)

  rows.sort((a, b) =>{
      const firstValue = a.children[1].textContent.toLowerCase()
      const secondValue = b.children[1].textContent.toLowerCase()

      return firstValue.localeCompare(secondValue)
  })

  rows.forEach(row => userTable.appendChild(row))
}

function searchFilter(){
  const searchInput = document.getElementById('search')
  const filterValue = searchInput.value.toLowerCase()

  const userTable = document.getElementById("tableBody")
  const rows = Array.from(userTable.children)

  rows.forEach((row) =>{
      const name = row.children[1].textContent.toLowerCase()
      row.style.display = name.includes(filterValue) ? '' : "none";
  })
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loading').style.display = 'block';
  addValueIntoTable();
});