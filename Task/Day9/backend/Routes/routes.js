import express from 'express'
import { getdata, gettask1 } from '../controller/authController.js'
const Router=express.Router()
Router.post('/senddata',gettask1)
Router.get('/getdata',getdata)
export default Router
// http://localhost:3000/api/users/senddata
// http://localhost:3000/api/users/getdata