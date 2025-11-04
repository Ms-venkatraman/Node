console.log("Starting...");


setTimeout(()=>{
console.log("start async ")
setTimeout(()=>{
    console.log("process inside async")
setTimeout(()=>{
console.log("end async")
},4000)
},3000)
},2000)

