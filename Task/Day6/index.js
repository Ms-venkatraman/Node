import express from 'express';
import dontenv from 'dotenv';
import cors from 'cors';
import auth from './Router/auth.js';

dontenv.config();
const app=express();
const PORT=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use('/api/users',auth);

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
//http://localhost:5000/api/users