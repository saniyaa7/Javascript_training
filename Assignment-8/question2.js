// 2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). 
// Log the data into the console once it is received

const fetchApi = async () => {
  const data = await fetch("https://reqres.in/api/users");
  const users = await data.json();
  console.log(users);
}

fetchApi();
//output will be the user data