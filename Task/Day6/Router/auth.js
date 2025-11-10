import express from 'express';
import { body, headers, params, query} from '../authControler/controle.js';

const router=express.Router();

router.post('/data',body);
// routes.get('/datas/:user_id',dataController)

router.get('/params/:id',params);

router.get('/query',query);

router.get('/headers',headers);
//http://localhost:3000/api/users/data
//http://localhost:3000/api/users/params/
//http://localhost:3000/api/users/query
//http://localhost:3000/api/users/headers
export default router;