const num= [1,33,99,50,100,150,60,99,1000,999,0,-1,10];
const num1 = 150;
const filtered = num.filter(function(x,y) {
  return x>=num1;
});
console.log(filtered.sort());