import express from 'express';
import { authController } from '../Controller/authcontroller.js';
const Router=express.Router();

Router.post('/data',authController);
export default Router;