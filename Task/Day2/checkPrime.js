
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