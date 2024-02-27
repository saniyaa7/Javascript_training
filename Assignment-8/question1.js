//1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
const func = async () => {
  console.log("Printing before")
  await sleep(2000)
  console.log("Printing after")
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

func()