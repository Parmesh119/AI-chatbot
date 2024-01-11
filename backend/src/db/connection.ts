import app from '../app.js'
import dotenv from 'dotenv'
dotenv.config()
import mongoose, { ConnectOptions } from 'mongoose'
const URL = process.env.MONGODB;
let db = mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
    .then(() => {
        app.listen(3000, () => {
            console.log('connected')
        })
    })
    .catch((error) => {
        console.log(error);
    });