function sayhemlo(){
    console.log("hemlo");
}
sayhemlo();
//function with parameters
function sum(num1,num2){
    let sum=num1+num2;
    console.log(sum);
    //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript
}
sum(2,5);
//function with return value
function multiply(num1,num2){
 //   let muplti=num1*num2;
    return num1*num2;
}
let ans=multiply(2,2);//when function returns the value you have to collect it in the variable
console.log(ans);
//storing afunction in a variable
let a=function sub (num1,num2){
    let subtract=num1-num2
    return subtract
}
let ans2= a(3,1);
console.log(ans2);
//IIFE-(immedieatly invoked function expression)
(function sayhi(){
     console.log("hi");
})();
//IIFE with parameters
(function divide(num1,num2){
    console.log(num1/num2);
})(15,5);