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


const server = http.createServer(()=>{
    console.log("Server start");
    
})

const PORT = 8000

server.listen(PORT,()=>{
    console.log(`Server start ${PORT}`);
})
fs.mkdir("/node/Task/Day3/Leobooking",(err)=>{
    if(!err){
        console.log("Folder created");  
    }
    console.log("folder created successfully");
})