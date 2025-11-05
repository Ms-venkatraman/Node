const arr=[1,2,3,4,4,6,4,8,9,3,4,2];
find=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j] && !find.includes(arr[i])){
            find.push(arr[i]);
        }
    }
}
console.log(find);