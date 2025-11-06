console.log('file created successfully')
import fs from 'fs'
import http from 'http'

const server = http.createServer((req, res) => {});
server.listen(5000,()=>{
    console.log('Server is running on port 5000');
});

if(!fs.existsSync('Day3/leomoviebooking')){
    fs.mkdir('Day3/leomoviebooking',(err)=>{
        if(err) console.log("thies is  erro for folder creating",err.message);
        console.log('leomoviebooking folder  created');
    })  
}

if(!fs.existsSync('Day3/leomoviebooking/movies.txt')){
    fs.writeFile('leomoviebooking/movies.txt','Movie name : LEO \n directer : lokesh , Actor : vijay ',(err)=>{
        if(err) console.log(" movies text: ", err.message);
        console.log('movies file created');
    }) }

if(fs.existsSync('Day3/leomoviebooking/home.txt')){
    fs.writeFile('leomoviebooking/home.txt','movies listed :- \n Leo \n varisu \n bison',(err)=>{
        if(err) console.log(" home text: ", err.message);
        console.log('home file created');
    })
}

if(fs.existsSync('Day3/leomoviebooking/booking.txt')){
    fs.writeFile('leomoviebooking/booking.txt','This is booking file\n leo movie availabel tickets : 2',(err)=>{
        if(err) console.log(" booking text: ", err.message);
        console.log('booking file created');
    })  
}

if(fs.existsSync('Day3/leomoviebooking/contact.txt')){    
    fs.writeFile('leomoviebooking/contact.txt','This is contact file\n contact number : 9876543210',(err)=>{
        if(err) console.log(" contact text: ", err.message);
        console.log('contact file created');
    })  
}
 