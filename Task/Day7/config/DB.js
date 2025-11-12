import mongoose from "mongoose"
const connection= async ()=>{
    try {
        const data=await mongoose.connect(process.env.MONGO_URI);
        console.log(`successfully DB connected ${data.connection.host}`);
        
    } catch (error) {
        console.log("DB connection Error :",error)
    }
}

export default connection