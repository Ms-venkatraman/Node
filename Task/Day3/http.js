import fs from 'fs'
import http from 'http' 

const server = http.createServer((req,res)=>{});
const port=3000;
server.listen(port,()=>{
    console.log('server is running on Port http://localhost:'+port);
});

if(!fs.existsSync('Day3/leomoviebooking')){
    fs.mkdir('leomoviebooking',(err)=>{
        if(err) console.log("error is :",err.message);
          
         console.log('folder created');
    });
   
}

if(!fs.existsSync('leomoviebooking/movies.txt')){
    fs.writeFile('leomoviebooking/movies.txt',"movie list : 1. leo 2. varisu 3. bison",(err)=>{
        if(err) console.log("error is :",err.message);
        console.log('file created');
    }   );
}

if(!fs.existsSync('leomoviebooking/Home.txt')){
    fs.writeFile('leomoviebooking/Home.txt',"welcome to leo movie booking app",(err)=>{
        if(err) console.log("error is :",err.message);
        console.log('file created');
    }   );
}

if(!fs.existsSync('leomoviebooking/Booking.txt')){

    fs.writeFile('leomoviebooking/Booking.txt',"your Leo movie booking is confirmed",(err)=>{
        if(err) console.log("error is :",err.message);
})
}
    
if(!fs.existsSync('leomoviebooking/contact.txt')){
    fs.writeFile('leomoviebooking/contact.txt',"contact us at : Kasi theater \n mobile : 9876543210",(err)=>{
        if(err) console.log("error is :",err.message);  
    })
}