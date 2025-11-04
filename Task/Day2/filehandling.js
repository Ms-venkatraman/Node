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
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
 console.log("given number is:",isPrime(5))
`
fs.writeFile("checkPrime.js",primenumber,(err)=>{
    if(err){
        console.log("error message : ",err)
    }
    console.log("create prime sucessfully")
})

const checkduplicate=`
const names=['venkat','paras','dinesh','sathish','paras']
function findDuplicates(arr) {
  if (!Array.isArray(arr)) return [];
  const counts = new Map();
  for (const item of arr) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }
  const duplicates = [];
  for (const [item, cnt] of counts.entries()) {
    if (cnt > 1) duplicates.push(item);
  }
  return duplicates;
  console.log(findDuplicates(names))
}`
fs.writeFile("checkDuplicate.js",checkduplicate,(err)=>{
    if(err){
        console.log("error message : ",err)
    }
    console.log("create checkduplicate sucessfully")
})
