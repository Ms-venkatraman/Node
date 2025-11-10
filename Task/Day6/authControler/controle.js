
export const body=(req,res)=>{
    const {Title, warrior_name, warrior_place, warrior_superpower, warrior_experience}=req.body
     try{
        res.status(200).json({
            message: "Data Received Successfully",
            data: { Title, warrior_name, warrior_place, warrior_superpower, warrior_experience}
        });     
    }catch(error){
        res.status(404).json({
            message: "Server Error",
            error: error.message
        });
    }

}


export const params=(req,res)=>{
    //console.log(req);
    // console.log(req.params);
    const {id} = req.params;

    try{
        if(id == "10"){
            res.status(200).json({
                name :"Power stone",
                message: "Params Received Successfully",
                data: {id}
            });
        }
        else if(id == "20"){
            res.status(200).json({
                name :"Time stone",
                message: "Params Received Successfully",
                data: {id}
            });
        }
        else if(id == "30"){
            res.status(200).json({
                name :"Sole stone",
                message: "Params Received Successfully",
                data: {id}
            });
        }
        else if(id == "40"){
            res.status(200).json({
                name :"Mine stone",
                message: "Params Received Successfully",
                data: {id}
            });
        }
    
    }
    catch(error){
        res.status(404).json({
            message: "Server Error",
            error: error.message
        });
    }
}

export const query=(req,res)=>{
    //console.log(req);
    // console.log(req.query);
    const {name,powerID,planetID} = req.query;
    try{
        if(name.toLowerCase()=="thanos"){
        res.status(200).json({
         message: "Query Received Successfully",
            data: {name,powerID,planetID}
        });}
        else{
            res.status(400).json({
                message: "not allowed",
                   data: {name,powerID,planetID}
               });
        }
    }catch(error){
        res.status(404).json({
            message: "Server Error",
            error: error.message
        });
    }
}   

export const headers=(req,res)=>{
    // console.log(req);
    const {name}=req.headers;
    const uname=name.toLowerCase()
    if(uname==="wakanda"||uname==="vibranium"){
   res.status(200).json({message:"allowed user",name});
    }
    else{
        res.status(404).json({message:"not allowed this user",name});
    }
}