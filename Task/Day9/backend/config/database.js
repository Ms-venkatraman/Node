import mongoose from "mongoose";
const connectiondb=async ()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URI)
        console.log(`DataBase Connected ${connect.connection.name}`)
    } catch (error) {
        console.log(`something error to DB : ${error.message}`)
    }

}
export default connectiondb