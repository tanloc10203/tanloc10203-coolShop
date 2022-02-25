import bodyParser from "body-parser";
import multiparty from "connect-multiparty";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import path from "path";
import initWebRoutes from "./routers/web";
import multer from "multer";

dotenv.config();
let app = express();
const PORT = process.env.PORT || 5000;
// const BASE_URL = process.env.BASE_URL_CLIENT;

const BASE_URL =
  "https://61f8efa17bcc72792bf5586b--vigorous-stonebraker-6e0dce.netlify.app";
const URI_DB = process.env.URI_DB;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/asset/upload/");
  },
  filename: (req, file, cb) => {
    let ext = file.originalname.split(".");
    ext = ext[ext.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage: storage });

mongoose
  .connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connection Successfully!"))
  .catch((err) => console.log(err));

app.use(express.static(__dirname + "/asset/upload"));
app.use(cors({ credentials: true, origin: "*" }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(upload.array("files"));

app.post("/api/admin/upload", (req, res) => {
  const tempFile = req.files;

  if (tempFile.length > 0) {
    res.json(req.files[0]);
  }
});

initWebRoutes(app);

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
