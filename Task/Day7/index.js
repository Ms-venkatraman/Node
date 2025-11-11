import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './config/DB.js';

dotenv.config()
connection()
const app=express()
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running...   http://localhost:${PORT}`)
})