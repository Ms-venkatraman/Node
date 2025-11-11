import mongoose from "mongoose";
const connection=async ()=>{
    try {
        const data=await mongoose.connect(process.env.MONGO_URI)
        console.log(`successfully db running... ${data.connection.host}`)
    } catch (error) {
        console.log("db is not running...",error);
        
    }
}
export default connection 