import express from  'express'
import {body, deleteparams, movie, params, putparams } from '../Controller/controler.js'
import { getdata, teadata } from '../Controller/testController.js'
const router=express.Router()

router.get("/tamilmovies",movie)
router.get("/tamilmovies/:id",params)
router.post("/tamilmovies",body)
router.put("/tamilmovies/:id",putparams)
router.delete("/tamilmovies/:id",deleteparams)
router.post("/tamilmovies/test",teadata)
router.post("/tamilmovies/getdata",getdata)

//   http://localhost:3000/api/tamilmovies/100

export default router