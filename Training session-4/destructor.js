const user = { 
  person: { 
    employee: { firstname: "Rahul" }, 
    likes: ["Cycling", "Hiking", "Driving"] 
  } }
const {employee:{firstname}, likes: [,secondlikes] }= user.person;

console.log(firstname);
console.log(secondlikes);