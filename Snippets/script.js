var arr = [2,9,7,6,0,4,5,0];


//WAP to find sum of all elements of an array without using a loop
var sum = arr.reduce(function(total,val){
  return total+val;
},0);

console.log(sum);


//WAP to find all even elements from an array without using a loop
sum = arr.reduce(function(total,val){
  return !(val%2)?total+val:total;
},0);

console.log(sum);


//WAP to add 5 to all non-zero elements of an array without using a loop
var mapped_arr = arr.map(function(val){
  return val?val+5:val;
},0);

console.log(mapped_arr);


//WAP to execute sum(2)(3) and the output will be 5
sum = function(a) {
  return function(b) {
    return a+b;
  }
}

console.log(sum(2)(3));


// Consider a class number. Try to implement the following execution
//new Number(5).sum(7).minus(2).expo(2).display(). The output should be “The result of numeric operation is 20”

function Number(val) {
   value = val;
  
   this.sum = function(num) {
     value += num;
     return this;
   };
   this.minus = function(num) {
     value -= num;
     return this;
   };
   this.expo = function(num) {
     value *= num;
     return this;
   };
   this.display = function(num) {
     return value;
   };
}

console.log(new Number(5).sum(7).minus(2).expo(2).display());