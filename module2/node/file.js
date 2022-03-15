let fs=require('fs');
let path=require('path');
 //console.log(fs);
 // create
 let filepath = path.join(__dirname,"fil.txt");
//console.log(filepath);
fs.writeFileSync(filepath,"this is some text");

//read
 let content=fs.readFileSync(filepath,'utf-8');
 // console.log(content);

//update or append
let update=fs.appendFileSync(filepath,"\n hemlo");
console.log(fs.readFileSync(filepath,'utf-8'));

//delete
//fs.unlinkSync(filepath);