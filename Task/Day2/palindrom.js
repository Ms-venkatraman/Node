var value="amma";
var va=[];
var value1="";
// for(i=value.length;i>=1;i--){
//     value1+=value[i-1];
// }
// va.forEach(an=>{
//     value1+=an;
// })
// if(value==value1 || va1==va){
//     console.log(`${value}: It is Palindrome`);
// }
// else{
//     console.log(`${value}: It is not Palindrome`);
// }

for(let va1 of value){
    va.push(va1);
}
va1=va;
va1=va1.toString();
va.reverse();
va=va.toString();

if(va1==va){
    console.log(`${value}: It is Palindrome`);
}
else{
    console.log(`${value}: It is not Palindrome`);
}
