import express from  'express'
import {body, deleteparams, movie, params, putparams } from '../Controller/controler.js'
const router=express.Router()

router.get("/tamilmovies",movie)
router.get("/tamilmovies/:id",params)
router.post("/tamilmovies",body)
router.put("/tamilmovies/:id",putparams)
router.delete("/tamilmovies/:id",deleteparams)

//   http://localhost:3000/api/tamilmovies/100

export default router