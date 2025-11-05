import fs from 'fs'

fs.writeFile("palindrom.js","const data='file created succesfully'",(err)=>{
if(err){
    console.log("error is : ",err);
    return;
}

})
fs.readFile("palindrom.js","utf-8",(err,data)=>{
console.log(data)
})
fs.appendFile("palindrom.js","console.log('append ')\n ",(err)=>{
    if(err){
        console.log("error message is :",err)
    }

})
const factorial=`function factorial(n) {
  if (typeof n !== 'number' || n < 0) return undefined;
  if (n === 0 || n === 1) return 1n;
  let res = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    res *= i;
  }
  return res; // BigInt
}
  console.log(factorial(5))
`

fs.writeFile("factorial.js",factorial,(err)=>{
    if(err){
        console.log("error message : ",err)
    }
    console.log("create factorial sucessfully")
})

const primenumber=`

    for(a=2;a<=30;a++){
        var pm=true
        for(i=2;i<=a;i++){
            if(a%i==0 && i!=a){
            pm=false
            }
        } 
        if(pm==true){
            console.log("It is prime number"+i)
        }
        else{
            console.log("it is not prime number"+i)
        }
    }
`
fs.writeFile("checkPrime.js",primenumber,(err)=>{
    if(err){
        console.log("error message : ",err)
    }
    console.log("create prime sucessfully")
})

const checkduplicate=`
const arr=[1,2,3,4,4,6,4,8,9,3,4,2];
find=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j] && !find.includes(arr[i])){
            find.push(arr[i]);
        }
    }
}
console.log(find);`
fs.writeFile("checkDuplicate.js",checkduplicate,(err)=>{
    if(err){
        console.log("error message : ",err)
    }
    console.log("create checkduplicate sucessfully")
})
