import dotenv from 'dotenv';
import express from 'express';
import router from './routes/router.js';
import databaseConnect from './databaseconnect.js';

dotenv.config();
const app = express();
const port = process.env.API_PORT;

app.use(express.json());
app.use(router);

databaseConnect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
