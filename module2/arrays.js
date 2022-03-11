let arr =[];
console.log(arr);
// array with elements
let elearr=[1,2,5.5,'c',false,"this is a string"];
console.log(elearr);
//accessing the element using index
console.log("element at the 4th index "+elearr[3]);
console.log("element at the index 10 "+elearr[9]);//it is undefined as it doesnot exist
//changing element of the array
elearr[5]="nothing is here";
console.log(elearr);
//methods in array
//push:add items in array from last
elearr.push("new item");
console.log(elearr);
//pop :remove element from last
elearr.pop();
console.log(elearr);
//unshift: add element from starting
elearr.unshift("new item");
console.log(elearr);
//shift: remove element from starting
elearr.shift();
console.log(elearr);
//length of the array
let len=elearr.length;
console.log(len);
//concatinating the  arrays
let a=[1,1.5,'c'];
let b=[false,"not at all",1];
let c=['car',4.5];
let finalarr=a.concat(b,c);//you can add more arrays by addind it in bracket seprating by comma
console.log(finalarr);
//join():returns array as string
let arrasstring=b.join(" or "); //another seprator
console.log(arrasstring);
let arrasstring2=c.join();
console.log(arrasstring2);
//array.toString():method returns a string seperated by commas
let fruits=["apple","bannana","orange"];
let convtostring=fruits.toString();
console.log(convtostring);
//slice():array.slice(start,end);
/*Start position. Default is 0.
Negative numbers select from the end of the array.
/**End position. Default is last element.
Negative numbers select from the end of the array */
let value=fruits.slice(0,2);
console.log(value);
//splice() method adds and/or removes array elements.
// add two elements
let car=["ferrari","bughati","lamborghini","mustang","supara"];
console.log(car);
/*adding two elements //not working
let newcar=car.splice(2,0,"masserati","alto");
console.log(newcar);*/

/**deleting two element from the middle//working
let ansvalue=car.splice(2,2);
console.log(car);*/
