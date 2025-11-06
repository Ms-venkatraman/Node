import fs from 'fs';
import http from 'http';
import express from 'express';  
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  


if(!fs.existsSync('.env')){
fs.writeFile('.env',"PORT=5001",(err)=>{
    if(err) console.log("error is :",err.message);
    console.log('file created');        
});
}

const server1= http.createServer((req,res)=>{});
server1.listen(PORT,()=>{
    console.log('server is running on Port http://localhost:'+PORT);
});

// console.log(app);