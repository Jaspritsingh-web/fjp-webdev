let path =require('path');
//console.log(pat);
//extension name
let extensionname= path.extname('index.html');
console.log(extensionname);
//basename 
let basename=path.basename('index.html');
console.log(basename);
//directory name
console.log(__dirname);
//path of filename
console.log(__filename);
//add file in a directory 
let dirpath=__dirname;
let newfilepath=path.join(dirpath,"test.js");
console.log(newfilepath);
