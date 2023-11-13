import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRouter from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to database');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log('Server is running');
})

app.use("/api/auth",authRouter);
app.use("/api/question");

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});