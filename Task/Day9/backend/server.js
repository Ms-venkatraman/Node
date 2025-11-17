import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './Routes/routes.js'
import connectiondb from './config/database.js'
dotenv.config()
connectiondb()
const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT||5000
//http://localhost:3000/api/users
app.use('/api/users',routes)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})

//http://localhost:3000