import express from 'express'
import { control, getvalue } from '../controller/authControl.js'
const Router=express.Router()
Router.post('/data',control)
 Router.get("/user",getvalue)
export default Router
 //http://localhost:3000/api/auth/data
 //http://localhost:3000/api/auth/user