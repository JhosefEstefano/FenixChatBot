import "dotenv/config"
import express from "express";
import {router} from "./routes/webhook";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(router);

app.listen(PORT, ()=> console.log(`Running in port ${PORT}`));
