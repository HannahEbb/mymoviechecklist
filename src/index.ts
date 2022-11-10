import express, { json } from 'express';
import 'express-async-errors';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

//import all routes 

const app = express();
app.use(json());
//app.use(router);

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});