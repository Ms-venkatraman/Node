export const authController=(req,res)=>{
    console.log(req.body);
    const{name,Role,Salary}=req.body;
    res.status(200).json({
        message:"data received successfully",
        data:{name,Role,Salary}
    });
    
}