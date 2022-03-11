let str="I am a string";
console.log(str);
//length of the string
let len=str.length;
console.log(len);
//to uppercase and to lower case
let uppcase=str.toUpperCase();
console.log(uppcase);
let lowcase=str.toLowerCase();
console.log(lowcase);
//replace method
let repstr=str.replace("am","was");
console.log(repstr);
//slice method 
let slistr=str.slice(7,13); //2 se lekar 8 tak (not including the values of 2and 8)
console.log(slistr);
//concat method
let firstname="jasprit";
let lastname=" singh";
//let final_name=firstname.concat(lastname);or
let final_name=firstname+lastname;
console.log(final_name);
console.log(str.charAt(0));
// return  a string array
let splitted=str.split(" ");
console.log(splitted);
