import path from 'path'
import http from 'http'
import fs from 'fs' 


// const filepath = '/Node/Task/Day3/path.js'

// console.log(path.basename(filepath));
// console.log(path.dirname(filepath));

// console.log(path.extname(filepath));
// console.log('Path join',path.join("Node","Task","Day3","path.js "));
// console.log('Path resolve',path.resolve("Node","Task","Day3","path.js "));  
// console.log('Path resolve',path.resolve("path.js "));  

// const parse= path.parse(filepath);
// console.log('Path parse',parse);    
// console.log('Path parse',path.format(parse));
// console.log('path normalize',path.normalize(filepath));

if(!fs.existsSync('http.js')){
fs.writeFile('http.js',"console.log('hello world')",(err)=>{
    if(err) console.log("error is :",err.message);
    console.log('file created');        
})}
else{console.log('file already exists');}
fs.rmdir('public',(err)=>{
    if(err) console.log(err.message);
    console.log('folder deleted');
})  