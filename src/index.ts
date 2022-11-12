import express, { json } from 'express';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares/errorHandler';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import authRouter from './routes/authRoutes';
import filmRouter from './routes/filmRoutes';

const app = express();
app.use(json());
app.use(authRouter);
app.use(filmRouter);
app.use(errorHandlerMiddleware);

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});