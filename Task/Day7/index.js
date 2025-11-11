import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './config/DB.js';
import authRoute from './Router/authRoute.js'

dotenv.config()
connection()
const app=express()
app.use(cors())
app.use(express.json());
const PORT=process.env.PORT

app.use("/api",authRoute)

app.listen(PORT,()=>{
    console.log(`server is running...http://localhost:${PORT}`)
})
// http://localhost:3000/api