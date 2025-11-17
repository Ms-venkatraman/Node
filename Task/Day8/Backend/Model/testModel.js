import mongoose  from "mongoose";
const authmodel=new mongoose.Schema({
    username:String,
    course:String,
    mobile:Number
})
const Modeldb=mongoose.model('test',authmodel)
export default Modeldb