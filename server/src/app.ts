import * as dotenv from 'dotenv';
import express, { json } from 'express';
// import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(json());
app.use(
  cors({
    origin: '*',
  }),
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (_req, res) => {
  res.send('Hello World!!!!');
});
