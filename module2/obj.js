let obj={ };
console.log(obj);

let obj_abc={
    "name":"jasprit",//key:value(key should be unique)
    age:22,
    phone_no:100,
    lastname : "singh"
};
console.log(obj_abc);
let capamerika={
    name:'steve',
    age:114,
    friends:['bucky','thor','black panther','natasha','tony'],
    address:{
        city:"dojan-kalan",
        state:'haryana'
    },
    sayhi:function(){
        console.log("captain amerika says "+":every time some one tries to win a war before it starts inocent people pays off");
    }
}
console.log(capamerika);
 //accessing the diffrent keys in object
 console.log(capamerika.name);
 console.log(capamerika['age']);
 //to access the element of the array in object
 console.log(capamerika.friends[0]);
 // accessing object in the object
 console.log(capamerika.address.city);
 //function in object
 console.log(capamerika.sayhi);
 
 // adding a key in the object
 capamerika.movies=['Avengers','civil-war','endgame'];
 console.log(' object after adding key ',capamerika);
 //delete a key
 delete capamerika.movies;
 console.log(capamerika);
 //edit a key
 capamerika.address.city="sonepat";
 console.log(capamerika);