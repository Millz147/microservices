import express from 'express';
import dotenv from 'dotenv';
import { PORT } from './config/env';
const app = express();
dotenv.config();



app.listen(PORT, () => {
  console.log(`Service Listening At Port ${PORT}`);
});
