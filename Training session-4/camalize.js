const myString1 = "background-color";
const myString2 = "list-style-image";
const myString3 = "-webkit-transition";

const camelCased = (str) => str.replace(/-([a-z])/g, function (g) {
  return g[1].toUpperCase();
});

console.log(camelCased(myString1))
console.log(camelCased(myString2))
console.log(camelCased(myString3))