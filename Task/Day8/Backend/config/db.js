import mongoose from "mongoose"
export const connectDB=async ()=>{
    try {
         const data=await mongoose.connect(process.env.MONGO_URI)
    console.log("database connect sucessfully ",data.connection.name)
    } 
    catch (error) {
        console.log(`something error : ${error.message}`)
    }
   
}