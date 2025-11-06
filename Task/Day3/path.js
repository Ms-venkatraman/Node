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

fs.writeFile('http.js',"console.log('file created successfully')",(err)=>{
    if(err) throw err.message;
    console.log('file created');
})