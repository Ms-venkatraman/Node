import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Router from './Router/route.js';
import { connectDB } from './config/db.js';
dotenv.config()

connectDB()
const app=express();
const PORT=process.env.PORT||5000
app.use(express.json())
app.use(cors())

app.use('/api/auth',Router)

app.listen(PORT,()=>{
    console.log(`server connection successfully http://localhost:${PORT}`)
})

// http://localhost:3000/api/auth