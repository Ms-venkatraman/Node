import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authroutes from './Routes/authroutes.js';    //importing auth routes file 
dotenv.config();

const app=express();             // create an express app in expression style
const PORT=process.env.PORT || 5000;
app.use(cors());                //middleware to enable CORS
app.use(express.json());        //middleware to parse JSON bodies

app.use('/api/auth',authroutes); 


app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})