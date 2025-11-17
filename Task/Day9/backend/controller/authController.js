import dataModel from "../dbModels/task1Model.js"

export const gettask1=async (req,res)=>{
    try {
        const {username,age,course}=req.body
        console.log(req.body)
        const actualdata=await dataModel.create({username,age,course})

        res.status(201).json({msg:"succesfully store DB.",actualdata})
       
    } catch (error) {
        console.log(`something error is : `,error.message)
    }
}

export const getdata=async (req,res)=>{

    try {
     const data=await dataModel.find()
    res.status(200).json({data})     
    } catch (error) {
        res.status(404).json({msg:'something error ...'},error.message)
    }
   
}