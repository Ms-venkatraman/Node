
import Modeldb from '../Model/testModel.js';
export const control=async (req,res)=>{
    const {username,course,mobile}=req.body;
    const data= await Modeldb.create({username,course,mobile})
    res.status(201).json({message:"data get successfully",data})
}
export const getvalue=async(req,res)=>{
    const data=await Modeldb.find()
    res.status(200).json({data})

}