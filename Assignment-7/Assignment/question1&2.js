//How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

const data= {
  name:"Harry Potter",
  age: 12,
  address: {
   details: ["4", "Privet Drive"],
   area:"Little Whinging",
   city: "Surrey",
   state: "England"
  } 
 };

const dataCopy=JSON.parse(JSON.stringify(data));
dataCopy.address.details[0]="5";
console.log("data: ",data);
console.log("Copy data: ",dataCopy);


//2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
let obj = {
 a:"Apple",
 b:["Basketball","Baseball"],
 c: {
  call: "cellphone"
 },
 d: "Dog"
}

function filterObject(obj){
  let obj1={};
  let entries=Object.entries(obj)
  for(let i=0;i<entries.length;i++){
     if(typeof entries[i][1]!="object")
     {
        obj1[entries[i][0]]=entries[i][1]
     }
  }
  return obj1
}

console.log(filterObject(obj)) //This return {a:”Apple”, d:”Dog”}