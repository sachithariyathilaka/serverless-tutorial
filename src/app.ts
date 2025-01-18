import express, { Application } from 'express';
import serverlessHttp from "serverless-http";
import mongoose from 'mongoose';
import {registerBookController} from "./controller/book-controller";

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.info('MongoDB connection established !!'))
    .catch(err => console.error('MongoDB connection error: ', err));

const app: Application = express();
app.use(express.json());
registerBookController(app);

export const handler = serverlessHttp(app);