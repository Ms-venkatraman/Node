import mongoose from "mongoose";
const modelschema=new mongoose.Schema({
    username:String,
    age:Number,
    course:String
})
const dataModel=mongoose.model('task1',modelschema)
export default dataModel