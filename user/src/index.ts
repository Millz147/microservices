import express from 'express';
import dotenv from 'dotenv';
import { BASEURL, PORT } from './config/env';
import Route from './routes';
import { errorHandler } from './middlewares/errorHandler';
const app = express();
dotenv.config();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json({ limit: '10000mb' }));
app.use(`${BASEURL}/user`, Route);

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Service Listening At Port ${PORT}`);
});
