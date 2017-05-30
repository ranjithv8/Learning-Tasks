var arr = [2,9,7,6,0,4,5,0];

var sum = arr.reduce(function(total,val){
  return total+val;
},0);

console.log(sum);

sum = arr.reduce(function(total,val){
  return !(val%2)?total+val:total;
},0);

console.log(sum);

var mapped_arr = arr.map(function(val){
  return val?val+5:val;
},0);

console.log(mapped_arr);

sum = function(a) {
  return function(b) {
    return a+b;
  }
}

console.log(sum(2)(3));


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

console.log(new Number(5).sum(7).minus(2).expo(2).display())