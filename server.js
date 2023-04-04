import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api",router);

export default app;
