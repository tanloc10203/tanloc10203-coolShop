import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import initWebRoutes from './routers/web';

dotenv.config();
let app = express();
const PORT = process.env.PORT || 5000;
// const BASE_URL = process.env.BASE_URL_CLIENT;
const BASE_URL = "https://coll-shop.surge.sh";
const URI_DB = process.env.URI_DB;

mongoose
  .connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB Connection Successfully!'))
  .catch(err => console.log(err));


app.use(cors({ credentials: true, origin: BASE_URL }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
initWebRoutes(app);

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));